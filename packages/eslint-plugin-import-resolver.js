/**
 * NOTE: eslint-plugin-import does not yet support ESM Modules.
 * In order to support it within our monorepo, we have to use a custom
 * import/resolver that adds support for this.
 *
 * CREDIT: https://gist.github.com/danielweck/cd63af8e9a8b3492abacc312af9f28fd
 */
const path = require('path');
const { resolve: resolveExports } = require('resolve.exports');

// optionally handle NodeJS built-ins just in case not handled by another ESLint module resolver in the chain
const { builtinModules } = require('module');
const builtins = new Set(builtinModules);

/**
 * @param {string} source source
 * @param {string} file file
 * @param {Object} _config config
 */
const resolve = (source, file, _config) => {
  if (builtins.has(source)) {
    // return { found: false }; // this also works?
    return { found: true, path: null };
  }
  try {
    const moduleId = require.resolve(source, { paths: [path.dirname(file)] });
    return { found: true, path: moduleId };
  } catch (/** @type {any} */ err) {
    if (
      err.code === 'MODULE_NOT_FOUND' &&
      err.path?.endsWith('/package.json')
    ) {
      const { name, module, main, exports } = require(err.path);
      const resolved = resolveExports({ name, module, main, exports }, source);
      const moduleId = path.join(path.dirname(err.path), resolved);
      return { found: true, path: moduleId };
    }
    return { found: false };
  }
};

module.exports = {
  interfaceVersion: 2,
  resolve,
};

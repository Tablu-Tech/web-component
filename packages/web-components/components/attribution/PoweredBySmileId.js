class PoweredBySmileId extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
        <p style='margin-inline: auto; max-inline-size: 10rem'>
<svg height="40" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><g fill="none"><path d="M33 16.5C33 25.613 25.613 33 16.5 33S0 25.613 0 16.5 7.387 0 16.5 0 33 7.387 33 16.5" fill="#00a9ac"/><path d="M28.426 16.5c0 6.586-5.34 11.926-11.926 11.926S4.574 23.086 4.574 16.5 9.914 4.574 16.5 4.574 28.426 9.914 28.426 16.5" fill="#fa9d1e"/><path d="M16.5 27.936c-6.316 0-11.436-5.12-11.436-11.436S10.184 5.064 16.5 5.064s11.436 5.12 11.436 11.436-5.12 11.436-11.436 11.436m0-24.015C9.553 3.92 3.92 9.553 3.92 16.5c0 6.947 5.633 12.58 12.58 12.58s12.58-5.633 12.58-12.58S23.446 3.92 16.5 3.92" fill="#fff"/><path d="M18.122 17.004A8.533 8.533 0 0 0 16.5 19.93a8.533 8.533 0 0 0-1.622-2.927l-.012-.014h3.268l-.012.014zM16.5 15.247c-.856 0-1.716.022-2.577.064a5.805 5.805 0 0 0-1.34-1.286 55.312 55.312 0 0 1 11.595.397l.141-1.343c-2.524-.506-5.14-.772-7.819-.772s-5.295.266-7.82.772l.142 1.343a54.479 54.479 0 0 1 1.888-.232.493.493 0 0 1 .253.04c.59.258 1.101.665 1.49 1.174a51.861 51.861 0 0 0-4.758.584l.147 1.392c1.245-.108 2.77-.223 3.091-.23 1.826-.035 3.342 1.218 3.78 2.996.301 1.27.141 2.91.099 3.705h3.376c-.042-.795-.202-2.435.1-3.705.437-1.778 1.953-3.031 3.779-2.995.322.006 1.846.12 3.091.229l.147-1.392a52.82 52.82 0 0 0-8.805-.74zm0-5.445c-1.894 0-3.74.2-5.52.578l.129 1.236c1.759-.262 3.56-.398 5.391-.398s3.632.136 5.391.398l.13-1.236a26.505 26.505 0 0 0-5.521-.578" fill="#000"/></g></svg>
        </p>
      `;

    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true),
    );
  }
}

if (
  window.customElements &&
  !window.customElements.get('powered-by-smile-id')
) {
  window.customElements.define('powered-by-smile-id', PoweredBySmileId);
}

export default PoweredBySmileId;

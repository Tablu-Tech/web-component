import './SmartCameraWeb';

const meta = {
  args: {
    'theme-color': '#02aaad',
  },
  argTypes: {
    'theme-color': { control: 'color' },
  },
  component: 'smart-camera-web',
};

export default meta;

export const SmartCameraWeb = {
  render: (args) => `
        <smart-camera-web theme-color='${args['theme-color']}' capture-id show-navigation>
        </smart-camera-web>
    `,
};

export const SmartCameraWebWithOutInstructions = {
  render: (args) => `
        <smart-camera-web theme-color='${args['theme-color']}' capture-id hide-instructions>
        </smart-camera-web>
    `,
};

export const SmartCameraWebWithOutNavigation = {
  render: (args) => `
        <smart-camera-web theme-color='${args['theme-color']}' capture-id>
        </smart-camera-web>
    `,
};

export const SmartCameraWebWithOutBackToHost = {
  render: (args) => `
        <smart-camera-web theme-color='${args['theme-color']}' capture-id show-navigation hide-back-to-host>
        </smart-camera-web>
    `,
};

export const SmartCameraWebWithOutBackId = {
  render: (args) => `
        <smart-camera-web theme-color='${args['theme-color']}' capture-id show-navigation hide-back-of-id>
        </smart-camera-web>
    `,
};

export const SmartCameraWebAgentMode = {
  render: () => `
        <smart-camera-web hide-instructions hide-back-of-id allow-agent-mode='true' show-agent-mode-for-tests>
        </smart-camera-web>
    `,
};

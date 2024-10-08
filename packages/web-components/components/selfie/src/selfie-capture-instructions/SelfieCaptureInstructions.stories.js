import './index';

const meta = {
  argTypes: {
    'theme-color': { control: 'color' },
  },
  component: 'selfie-capture-instructions',
};

export default meta;

export const SelfieInstruction = {
  args: {
    'theme-color': '#02aaad',
  },
  render: (args) => `
        <selfie-capture-instructions
            show-navigation
            theme-color='${args['theme-color']}'
        >
        </selfie-capture-instructions>
    `,
};

import './SignaturePad';

const meta = {
  args: {
    'theme-color': '#02aaad',
  },
  argTypes: {
    'theme-color': { control: 'color' },
  },
  component: 'smileid-signature-pad',
};

export default meta;

export const SignaturePad = {
  render: (args) => `
        <smileid-signature-pad
        theme-color='${args['theme-color']}'
        >
        </smileid-signature-pad>
    `,
};

export const SignaturePadWithUploads = {
  render: (args) => `
        <smileid-signature-pad
          allow-upload
          theme-color='${args['theme-color']}'
        >
        </smileid-signature-pad>
    `,
};

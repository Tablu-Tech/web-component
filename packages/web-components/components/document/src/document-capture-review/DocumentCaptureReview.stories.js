import './index';

const meta = {
  argTypes: {
    'theme-color': { control: 'color' },
  },
  component: 'document-capture-review',
};

export default meta;

export const IdReview = {
  args: {
    'theme-color': '#02aaad',
  },
  render: (args) => `
        <document-capture-review
          show-navigation
          data-image="https://placehold.co/600x400"
          theme-color='${args['theme-color']}'
        >
        </document-capture-review>
    `,
};

import AppTag from './AppTag';

export default {
  title: 'Components/AppTag',
  component: AppTag,
};

const Template = (args) => ({
  components: { AppTag },
  setup() {
    return { args };
  },
  template: '<AppTag v-bind="args">tag</AppTag>',
});

export const Default = Template.bind({});

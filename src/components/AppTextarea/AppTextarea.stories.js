import AppTextarea from './AppTextarea';

export default {
  title: 'Components/AppTextarea',
  component: AppTextarea,
};

const Template = (args) => ({
  components: { AppTextarea },
  setup() {
    return { args };
  },
  template: '<AppTextarea v-bind="args" rows="8"></AppTextarea>',
});

export const Default = Template.bind({});

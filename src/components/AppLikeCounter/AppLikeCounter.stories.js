import AppLikeCounter from './AppLikeCounter';

export default {
  title: 'Components/AppLikeCounter',
  component: AppLikeCounter,
};

const Template = (args) => ({
  components: { AppLikeCounter },
  setup() {
    return { args };
  },
  template: '<AppLikeCounter v-bind="args"></AppLikeCounter>',
});

export const Default = Template.bind({});

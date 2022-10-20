import AppAvatar from './AppAvatar';

export default {
  title: 'Components/AppAvatar',
  component: AppAvatar,
};

const Template = (args) => ({
  components: { AppAvatar },
  setup() {
    return { args };
  },
  template: '<AppAvatar v-bind="args" src="/images/image-amyrobson.png"></AppAvatar>',
});

export const Small = Template.bind({});
Small.args = {
  variant: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium'
};

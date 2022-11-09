import AppLink from './AppLink';

export default {
  title: 'Components/AppLink',
  component: AppLink,
};

const Template = (args) => ({
  components: { AppLink },
  setup() {
    return { args };
  },
  template: '<AppLink v-bind="args" src="/images/image-amyrobson.png">@lanaschuster</AppLink>',
});

export const Default = Template.bind({});
Default.args = {
  href: 'https://github.com/lanaschuster',
  target: '_blank'
};

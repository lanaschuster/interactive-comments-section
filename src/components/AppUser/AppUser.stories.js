import AppUser from './AppUser';

export default {
  title: 'Components/AppUser',
  component: AppUser,
};

const Template = (args) => ({
  components: { AppUser },
  setup() {
    return { args };
  },
  template: '<AppUser v-bind="args"></AppUser>',
});

export const Default = Template.bind({});
Default.args = {
  username: 'lanaschuster',
  avatar: '/images/image-amyrobson.png'
};

export const CurrentUser = Template.bind({});
CurrentUser.args = {
  isCurrentUser: true,
  username: 'lanaschuster',
  avatar: '/images/image-amyrobson.png'
};

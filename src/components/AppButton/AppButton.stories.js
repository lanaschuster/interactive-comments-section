import AppButton from './AppButton';

export default {
  title: 'Components/AppButton',
  component: AppButton,
};

const Template = (args) => ({
  components: { AppButton },
  setup() {
    return { args };
  },
  template: '<AppButton v-bind="args">Clique-me!</AppButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger'
};

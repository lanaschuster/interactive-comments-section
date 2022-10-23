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
  template: '<AppButton v-bind="args"><i class="fa-solid fa-reply"></i> BUTTON</AppButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  variant: 'primary',
  type: 'text'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger'
};

export const DangerText = Template.bind({});
DangerText.args = {
  variant: 'danger',
  type: 'text'
};

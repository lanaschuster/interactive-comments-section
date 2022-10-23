import AppCard from './AppCard';

export default {
  title: 'Components/AppCard',
  component: AppCard,
};

const Template = (args) => ({
  components: { AppCard },
  setup() {
    return { args };
  },
  template: '<AppCard v-bind="args"><p>Hello, world!</p></AppCard>',
});

export const Default = Template.bind({});

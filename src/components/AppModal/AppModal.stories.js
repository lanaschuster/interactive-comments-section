import AppModal from './AppModal';
import AppButton from '@/components/AppButton/AppButton.vue';

export default {
  title: 'Components/AppModal',
  component: AppModal,
};

const Template = (args) => ({
  components: { AppModal, AppButton },
  setup() {
    return { args };
  },
  template: `
    <AppModal v-bind="args">
      <template #title>
        Modal Title!
      </template>
      <template #content>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat neque tellus, ac sagittis tortor pulvinar eget. Mauris aliquet orci ac est venenatis hendrerit.
        </p>
      </template>
      <template #actions>
        <AppButton variant="primary">
          Ok
        </AppButton>
      </template>
    </AppModal>
  `,
});

export const Default = Template.bind({});

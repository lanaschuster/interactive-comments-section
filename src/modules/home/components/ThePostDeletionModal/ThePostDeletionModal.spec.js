import { createMountedWrapper } from '@/test';
import ThePostDeletionModal from './ThePostDeletionModal';
import AppModal from '@/components/AppModal/AppModal.vue';
import AppCard from '@/components/AppCard/AppCard.vue';
import AppButton from '@/components/AppButton/AppButton.vue';

describe('Testing ThePostDeletionModal', () => {
  let wrapper, card, actions;

  beforeAll(() => {
    wrapper = createMountedWrapper(ThePostDeletionModal, {
      components: {
        AppModal,
        AppButton
      }
    });

    card = wrapper.findComponent(AppCard);
    actions = card.find('.app-modal-actions');
  });

  it('the cancel button emits the close event when clicked', async () => {
    expect(actions.exists()).toBeTruthy();
    const btn = actions.find('[data-testid="cancelBtn"]');
    expect(btn.exists()).toBeTruthy();

    await btn.trigger('click');
    expect(wrapper.emitted()['close']).toBeTruthy();
    expect(wrapper.emitted()['close'].length).toBe(1);
  });

  it('the deletion button emits the confirm event when clicked', async () => {
    const btn = actions.find('[data-testid="deleteBtn"]');
    expect(btn.exists()).toBeTruthy();

    await btn.trigger('click');
    expect(wrapper.emitted()['confirm']).toBeTruthy();
    expect(wrapper.emitted()['confirm'].length).toBe(1);
  });
});

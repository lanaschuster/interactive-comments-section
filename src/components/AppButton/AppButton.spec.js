import { createWrapper } from '@/test';
import AppButton from './AppButton';

describe('Testing AppButton component', () => {
  it('has the "primary" class based on props.variant', () => {
    const wrapper = createWrapper(AppButton);
    expect(wrapper.classes()).toContain('primary');
  });

  it('has the "danger" class based on props.variant', () => {
    const wrapper = createWrapper(AppButton, {
      props: {
        variant: 'danger'
      }
    });
    expect(wrapper.classes()).toContain('danger');
  });

  it('has the "text" class based on props.type', () => {
    const wrapper = createWrapper(AppButton, {
      props: {
        type: 'text'
      }
    });
    expect(wrapper.classes()).toContain('text');
  });

  it('emits the click event when it is clicked', async () => {
    const wrapper = createWrapper(AppButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });
});

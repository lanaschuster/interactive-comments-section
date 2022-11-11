import { createWrapper } from '@/test';
import AppLikeCounter from './AppLikeCounter';

describe('Testing AppLikeCounter component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(AppLikeCounter);
  });

  it('emits event when the plus icon is clicked', async () => {
    const plus = wrapper.find('[data-testid="plus"]');
    await plus.trigger('click');
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
    expect(wrapper.emitted()['update:modelValue'].length).toBe(1);
  });
  
  it('decreases the counter when the minus icon is clicked', async () => {
    const minus = wrapper.find('[data-testid="minus"]');
    await minus.trigger('click');
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
    expect(wrapper.emitted()['update:modelValue'].length).toBe(1);
  });
});

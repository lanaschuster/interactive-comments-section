import { createWrapper } from '@/test';
import AppLikeCounter from './AppLikeCounter';

describe('Testing AppLikeCounter component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = createWrapper(AppLikeCounter);
  });

  it('increases the counter when the plus icon is clicked', async () => {
    const plus = wrapper.find('[data-testid="plus"]');
    const counter = wrapper.vm.counter;
    await plus.trigger('click');
    expect(wrapper.vm.counter).toBe(counter + 1);
  });
  
  it('decreases the counter when the minus icon is clicked', async () => {
    const minus = wrapper.find('[data-testid="minus"]');
    const counter = wrapper.vm.counter;
    await minus.trigger('click');
    expect(wrapper.vm.counter).toBe(counter - 1);
  });
});

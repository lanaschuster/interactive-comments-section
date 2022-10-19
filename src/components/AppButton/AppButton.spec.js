import { shallowMount } from '@vue/test-utils';
import AppButton from './AppButton';

describe('Testing AppButton component', () => {
  it('emits a click event when clicked', async () => {
    const wrapper = shallowMount(AppButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted()['click']).toBeTruthy();
    expect(wrapper.emitted()['click'].length).toBe(1);
  });
});

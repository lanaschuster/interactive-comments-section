import { createWrapper, faker } from '@/test';
import AppTextarea from './AppTextarea';

describe('Testing AppTextarea component', () => {
  it('set the props.modelValue as the input value', async () => {
    const randomContent = faker.lorem.paragraph();

    const wrapper = createWrapper(AppTextarea, {
      props: {
        modelValue: randomContent
      }
    });
    
    expect(wrapper.vm.model).toBe(randomContent);
    expect(wrapper.element.value).toBe(randomContent);
  });
});

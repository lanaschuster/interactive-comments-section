import { createWrapper, faker } from '@/test';
import AppCard from './AppCard';

describe('Testing AppCard component', () => {
  it('renders the default slot content', () => {
    const randomContent = faker.lorem.paragraph();
    const wrapper = createWrapper(AppCard, {
      slots: {
        default: randomContent
      }
    });
    expect(wrapper.text()).toBe(randomContent);
  });
});

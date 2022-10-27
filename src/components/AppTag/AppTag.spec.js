import { createWrapper, faker } from '@/test';
import AppTag from './AppTag';

describe('Testing AppTag component', () => {
  it('renders the default slot content', () => {
    const randomContent = faker.lorem.paragraph();
    const wrapper = createWrapper(AppTag, {
      slots: {
        default: randomContent
      }
    });
    expect(wrapper.text()).toBe(randomContent);
  });
});

import { createWrapper, faker } from '@/test';
import AppAvatar from './AppAvatar';

describe('Testing AppAvatar component', () => {
  it('has the "medium" class based on props.variant', async () => {
    const wrapper = createWrapper(AppAvatar);
    expect(wrapper.classes()).toContain('medium');
  });

  it('has the "small" class based on props.variant', async () => {
    const wrapper = createWrapper(AppAvatar, {
      props: {
        variant: 'small'
      }
    });

    expect(wrapper.classes()).toContain('small');
  });

  it('renders the image', async () => {
    const imagePath = faker.image.imageUrl();

    const wrapper = createWrapper(AppAvatar, {
      attrs: {
        src: imagePath
      }
    });

    expect(wrapper.attributes().src).toBe(imagePath);
  });
});

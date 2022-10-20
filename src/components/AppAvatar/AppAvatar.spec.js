import { shallowMount } from '@vue/test-utils';
import { faker } from '@faker-js/faker';
import AppAvatar from './AppAvatar';

describe('Testing AppAvatar component', () => {
  it('has the "medium" class based on props.variant', async () => {
    const wrapper = shallowMount(AppAvatar);
    expect(wrapper.classes()).toContain('medium');
  });

  it('has the "small" class based on props.variant', async () => {
    const wrapper = shallowMount(AppAvatar, {
      props: {
        variant: 'small'
      }
    });

    expect(wrapper.classes()).toContain('small');
  });

  it('renders the image', async () => {
    const imagePath = faker.image.imageUrl();

    const wrapper = shallowMount(AppAvatar, {
      attrs: {
        src: imagePath
      }
    });

    expect(wrapper.attributes().src).toBe(imagePath);
  });
});

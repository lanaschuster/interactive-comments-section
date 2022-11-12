import { shallowMount, mount } from '@vue/test-utils';
import { faker } from '@faker-js/faker';

export { faker };

export const createWrapper = (component, options) => {
  return shallowMount(component, options);
};

export const createMountedWrapper = (component, options) => {
  return mount(component, options);
};

import { shallowMount } from '@vue/test-utils';
import { faker } from '@faker-js/faker';

export { faker };

export const createWrapper = (component, options) => {
  return shallowMount(component, options);
};

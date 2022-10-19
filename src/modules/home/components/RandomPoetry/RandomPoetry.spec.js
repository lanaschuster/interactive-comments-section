import { shallowMount, } from '@vue/test-utils';
import { faker } from '@faker-js/faker';
import RandomPoetry from './RandomPoetry.vue';

describe('Testing RandomPoetry', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(RandomPoetry);
    wrapper.vm.poetry.author = faker.name.fullName();
    wrapper.vm.poetry.title = faker.name.fullName();
    wrapper.vm.poetry.text = faker.datatype.array(Math.floor(Math.random() * 20));
  });

  it('renders the title', () => {
    const el = wrapper.find('[data-testid="title"]');
    expect(el).toBeTruthy();
    expect(el.text()).toBe(wrapper.vm.poetry.title);
  });

  it('renders the author', () => {
    const el = wrapper.find('[data-testid="author"]');
    expect(el).toBeTruthy();
    expect(el.text()).toBe(wrapper.vm.poetry.author);
  });

  it('renders the poetry lines', () => {
    const lines = wrapper.findAll('[data-testid="line"]');
    expect(lines).toBeTruthy();
    expect(lines.length).toBe(wrapper.vm.poetry.text.length);
  });
});

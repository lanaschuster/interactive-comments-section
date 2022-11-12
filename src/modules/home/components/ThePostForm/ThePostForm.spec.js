import { createMountedWrapper, faker } from '@/test';
import { createTestingPinia } from '@pinia/testing';
import ThePostForm from './ThePostForm';

describe('Testing ThePostForm', () => {
  let wrapper;

  let text = '';
  let postId = +faker.random.numeric(1);
  const user = {
    avatar: faker.internet.avatar(),
    username: faker.internet.userName(),
    isCurrent: false
  };

  beforeAll(() => {
    wrapper = createMountedWrapper(ThePostForm, {
      props: {
        user,
        text,
        postId
      },
      global: {
        plugins: [ createTestingPinia() ],
      },
    });
  });

  it('renders the avatar', () => {
    const el = wrapper.find('[data-testid="avatar"]');
    expect(el.exists()).toBeTruthy();
  });

  it('renders the textarea', () => {
    const el = wrapper.find('[data-testid="textarea"]');
    expect(el.exists()).toBeTruthy();
  });

  it('renders the submit button', () => {
    const el = wrapper.find('[data-testid="submit"]');
    expect(el.exists()).toBeTruthy();
  });

  it('emits an event when submit button is clickes', async () => {
    const el = wrapper.find('[data-testid="submit"]');
    await el.trigger('click');
    expect(wrapper.emitted()['send']).toBeTruthy();
    expect(wrapper.emitted()['send'].length).toBe(1);
  });
});

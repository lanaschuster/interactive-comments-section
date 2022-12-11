import { createMountedWrapper, faker } from '@/test';
import ThePostUpdateForm from './ThePostUpdateForm';

describe('Testing ThePostUpdateForm', () => {
  let wrapper;

  let postContent = faker.lorem.sentence(10);

  beforeAll(() => {
    wrapper = createMountedWrapper(ThePostUpdateForm, {
      props: {
        postContent
      }
    });
  });

  it('renders the textarea', () => {
    const el = wrapper.find('[data-testid="textarea"]');
    expect(el.exists()).toBeTruthy();
  });

  it('renders the submit button', () => {
    const el = wrapper.find('[data-testid="submit"]');
    expect(el.exists()).toBeTruthy();
  });

  it('emits an event when submit button is clicked', async () => {
    const el = wrapper.find('[data-testid="submit"]');
    await el.trigger('click');
    expect(wrapper.emitted()['update:postText']).toBeTruthy();
    expect(wrapper.emitted()['update:postText'].length).toBe(1);
  });
});

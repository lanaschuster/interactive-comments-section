import { createWrapper, faker } from '@/test';
import ThePostActions from './ThePostActions';

describe('Testing ThePostActions', () => {
  let wrapper;
  let post = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ex et tortor euismod cursus eget commodo lacus. In varius feugiat ante. In tellus felis, consectetur ut euismod sed, bibendum ac ipsum. Duis aliquam, erat a pellentesque rhoncus, purus est tristique nisi, et convallis tortor magna vel elit. Nam ac mauris neque. Fusce sem nisi, hendrerit ac euismod nec, porttitor ut quam. Sed venenatis tincidunt nunc quis scelerisque.',
    date: faker.date.recent(),
    likes: faker.random.numeric(2),
    user: {
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      isCurrent: false
    }
  };

  beforeEach(() => {
    wrapper = createWrapper(ThePostActions, {
      props: {
        post
      }
    });
  });

  it('renders the reply button when is not the current user', async () => {
    const reply = wrapper.find('[data-testid="reply"]');
    expect(reply.exists()).toBeTruthy();

    await reply.trigger('click');
    expect(wrapper.emitted()['reply']).toBeTruthy();
    expect(wrapper.emitted()['reply'].length).toBe(1);
  });

  it('renders the delete and edit button when is the current user', async () => {
    post.user.isCurrent = true;
    wrapper = createWrapper(ThePostActions, {
      props: {
        post
      }
    });

    const deleteBtn = wrapper.find('[data-testid="delete"]');
    expect(deleteBtn.exists()).toBeTruthy();

    await deleteBtn.trigger('click');
    expect(wrapper.emitted()['delete']).toBeTruthy();
    expect(wrapper.emitted()['delete'].length).toBe(1);

    const editBtn = wrapper.find('[data-testid="edit"]');
    expect(editBtn.exists()).toBeTruthy();

    await editBtn.trigger('click');
    expect(wrapper.emitted()['edit']).toBeTruthy();
    expect(wrapper.emitted()['edit'].length).toBe(1);
  });
});

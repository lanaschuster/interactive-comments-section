import { createMountedWrapper, faker } from '@/test';
import { createTestingPinia } from '@pinia/testing';
import ThePost from './ThePost';

describe('Testing ThePost', () => {
  let wrapper;
  let post = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ex et tortor euismod cursus eget commodo lacus. In varius feugiat ante. In tellus felis, consectetur ut euismod sed, bibendum ac ipsum. Duis aliquam, erat a pellentesque rhoncus, purus est tristique nisi, et convallis tortor magna vel elit. Nam ac mauris neque. Fusce sem nisi, hendrerit ac euismod nec, porttitor ut quam. Sed venenatis tincidunt nunc quis scelerisque.',
    date: faker.date.recent(),
    likes: +faker.random.numeric(2),
    user: {
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      isCurrent: false
    }
  };

  beforeEach(() => {
    wrapper = createMountedWrapper(ThePost, {
      props: {
        post
      },
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });

  it('renders the likes counter', () => {
    const el = wrapper.find('[data-testid="likeCounter"]');
    expect(el.exists()).toBeTruthy();
  });

  it('renders the header', () => {
    const el = wrapper.find('[data-testid="postHeader"]');
    expect(el.exists()).toBeTruthy();
  });

  it('renders the post content', async () => {
    const el = wrapper.find('[data-testid="postContent"]');
    expect(el.exists()).toBeTruthy();
    expect(el.text()).toContain(post.text);
  });
});

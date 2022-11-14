import { createWrapper, faker } from '@/test';
import ThePostHeader from './ThePostHeader';

describe('Testing ThePostHeader', () => {
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
    wrapper = createWrapper(ThePostHeader, {
      props: {
        post
      }
    });
  });

  it('renders the user details', () => {
    const user = wrapper.find('[data-testid="user"]');
    expect(user.exists()).toBeTruthy();
  });
});

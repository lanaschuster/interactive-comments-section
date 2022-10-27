import { createWrapper, faker } from '@/test';
import AppUser from './AppUser';

describe('Testing AppUser component', () => {
  let wrapper;
  let username = faker.internet.userName();
  let avatar = faker.internet.avatar();

  beforeAll(() => {
    wrapper = createWrapper(AppUser, {
      props: {
        username,
        avatar,
        isCurrentUser: true
      }
    });
  });

  it('renders the username', () => {
    const usernameEl = wrapper.find('[data-testid="username"]');
    expect(usernameEl.text()).toBe(username);
  });

  it('renders the "you" tag if props.isCurrentUser is true', () => {
    const tagEl = wrapper.find('[data-testid="tag"]');
    expect(tagEl.exists()).toBeTruthy();
  });

  it('hides the "you" tag if props.isCurrentUser is false', async () => {
    await wrapper.setProps({ 
      username,
      avatar,
      isCurrentUser: false
    });

    const tagEl = wrapper.find('[data-testid="tag"]');
    expect(tagEl.exists()).toBeFalsy();
  });

  it('renders the avatar', async () => {
    const avatarEl = wrapper.find('[data-testid="avatar"]');
    expect(avatarEl.exists()).toBeTruthy();
    expect(avatarEl.attributes().src).toBe(avatar);
  });
});

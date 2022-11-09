import { createWrapper } from '@/test';
import AppLink from './AppLink';

describe('Testing AppLink component', () => {
  let wrapper;
  const url = 'https://github.com/lanaschuster';
  const target = '_blank';

  beforeAll(() => {
    wrapper = createWrapper(AppLink, {
      props: {
        href: url,
        target: target
      }
    });
  });

  it('renders the a tag with props', async () => {
    expect(wrapper.attributes().href).toBe(url);
    expect(wrapper.attributes().target).toBe(target);
  });
});

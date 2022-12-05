import { h } from 'vue';
import { createMountedWrapper, faker } from '@/test';
import AppModal from './AppModal';

describe('Testing AppModal component', () => {
  const data = {
    title: faker.lorem.words(2),
    content: faker.lorem.paragraph(),
    actions: h('button', {}, 'Ok')
  };

  beforeAll(() => {
    createMountedWrapper(AppModal, {
      slots: {
        title: data.title,
        content: data.content,
        actions: data.actions
      },
      global: {
        stubs: {
          'AppCard': '<div><slot /></div>'
        }
      }
    });
  });

  it('renders the modal at document.body', () => {
    const modal = document.body.getElementsByClassName('app-modal');
    expect(modal.length).toBe(1);
  });
});

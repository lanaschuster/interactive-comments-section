import { faker } from '@faker-js/faker';

describe('sanity test', () => {
  it('testing configuration', () => {
    const name = faker.internet.userName();
    const message = `Hello ${name}, are you okay?`;

    expect(message).toContain(name);
  });
});

import { UserModel } from './servidor.model';

describe('UserModel', () => {
  it('should be defined', () => {
    expect(new UserModel()).toBeDefined();
  });
});

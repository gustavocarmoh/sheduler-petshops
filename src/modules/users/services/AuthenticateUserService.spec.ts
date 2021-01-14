import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';


describe('CreateAppointment', () => {

  it('should be able to authenticate', async () => {
    const fakeUserRepository = new FakeUsersRepository();

    const auuthenticateUser = new AuthenticateUserService(fakeUserRepository);

    const response = await auuthenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456'
    });

    expect(user).toHaveProperty('id');
  });
});

import path from 'path';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

import IUserRepository from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) {}

  public async execute({ user_id, avatarFilename }: IRequest): Promise<User | undefined> {
    try {
      const user = await this.usersRepository.findById(user_id);
      if (!user) {
        throw new AppError("Only authenticated users can change avatar.", 401);
      }

      if (user.avatar) {
        const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
        const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
        if (userAvatarFileExists) {
          await fs.promises.unlink(userAvatarFilePath);
        }
      }

      user.avatar = avatarFilename;

      await this.usersRepository.save(user);
      return user;
    } catch (error) {
      console.error(error)
    }
  }
}

export default UpdateUserAvatarService;

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    //@ts-ignore
    delete user.password;
    //@ts-ignore
    delete user.created_at;
    //@ts-ignore
    delete user.updated_at;

    return response.json(user);
  }
}

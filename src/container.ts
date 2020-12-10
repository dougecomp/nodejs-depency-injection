import { container } from 'tsyringe';

// Users Repository
import {IUsersRepository} from '../src/repositories/IUsersRepository';
import {UsersRepository} from '../src/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

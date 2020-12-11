import { injectable, inject } from 'tsyringe';
import { ICreateUserDTO, IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
export class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,
  ) {
    this.usersRepository = usersRepository;
  }

  public async execute(data: ICreateUserDTO): Promise<{name: string;email: string}> {
    const user = await this.usersRepository.create(data);
    return user
  }
}
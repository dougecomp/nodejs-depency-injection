import {IUsersRepository} from '../repositories/IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private ormRepository: {name: string; email: string}[];

  constructor() {
    this.ormRepository = [];
  }

  public async create(userData: {name: string; email: string}): Promise<{name: string; email: string}> {
    // const user = this.ormRepository.create(userData);
    // await this.ormRepository.save(user);
    this.ormRepository = [
      userData
    ]
    return new Promise((resolve => {
      resolve(userData)
    }));
  }

}
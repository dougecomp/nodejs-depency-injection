import { inject, injectable } from 'tsyringe';
import {IUsersRepository} from '../repositories/IUsersRepository';

@injectable()
export class UsersRepository implements IUsersRepository {
  private ormRepository: {name: string; email: string}[];

  constructor(@inject("UserData") data: {name: string; email: string}[]) {
    this.ormRepository = data
  }

  public async create(userData: {name: string; email: string}): Promise<{name: string; email: string}> {
    // const user = this.ormRepository.create(userData);
    // await this.ormRepository.save(user);
    this.ormRepository.push(userData)
    console.log(this.ormRepository);    
    return Promise.resolve(userData);
  }

}
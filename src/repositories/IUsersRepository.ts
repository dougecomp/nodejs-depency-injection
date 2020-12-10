export interface ICreateUserDTO {
  name: string;
  email: string;
}

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<{name:string;email:string;}>
}
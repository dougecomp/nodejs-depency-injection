import 'reflect-metadata'
import {container} from 'tsyringe'

import './container'
import { CreateUserService } from './services/CreateUserService'

(async function () {
  container.register<{name: string; email: string}[]>("UserData", {useValue: [{name:"silvio", email:"silvio@santos.com"}]})
  const createUserService = container.resolve(CreateUserService)
  await createUserService.execute({name:'douglas', email:'douglas@email.com'})
}())

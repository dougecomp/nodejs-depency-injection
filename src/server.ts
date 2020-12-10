import 'reflect-metadata'
import {container} from 'tsyringe'

import './container'
import { CreateUserService } from './services/CreateUserService'

(async function () {
  const createUserService = container.resolve(CreateUserService)
  const user = await createUserService.execute({name:'douglas', email:'douglas@email.com'})
  console.log(user)
}())

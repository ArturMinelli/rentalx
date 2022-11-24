import { Router } from 'express'

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'

export const usersRoutes = Router()

const createUserController = new CreateUserController()
const updateUserAvatarUseCase = new UpdateUserAvatarController()

usersRoutes.post('/', createUserController.handle)

usersRoutes.patch('/avatar', updateUserAvatarUseCase.handle)

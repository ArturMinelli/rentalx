import { container } from 'tsyringe'
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'

container.register<(ICategoriesRepository)>(
  "CategoriesRepository",
  CategoriesRepository
)

container.register<(ISpecificationsRepository)>(
  "SpecificationsRepository",
  SpecificationsRepository
)

container.register<(IUsersRepository)>(
  "SpecificationsRepository",
  UsersRepository
)

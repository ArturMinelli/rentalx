import { container } from 'tsyringe'
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationsRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'
import { ICarsRepository } from '../../modules/cars/repositories/ICarsRepository'
import { CarsRepository } from '../../modules/cars/infra/typeorm/repositories/CarsRepository'

container.register<(ICategoriesRepository)>(
  "CategoriesRepository",
  CategoriesRepository
)

container.register<(ISpecificationsRepository)>(
  "SpecificationsRepository",
  SpecificationsRepository
)

container.register<(IUsersRepository)>(
  "UsersRepository",
  UsersRepository
)

container.register<(ICarsRepository)>(
  "CarsRepository",
  CarsRepository
)

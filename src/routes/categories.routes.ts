import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { ListCategoriesService } from '../modules/cars/services/ListCategoriesService'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase'

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
  const createCategoryController = new CreateCategoryController(createCategoryUseCase)
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
  const listCategoriesService = new ListCategoriesService(categoriesRepository)
  const categories = listCategoriesService.execute()

  response.status(200).json(categories)
})

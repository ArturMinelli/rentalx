import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'
import { ListCategoriesService } from '../services/ListCategoriesService'

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.execute({ name, description })

  response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const listCategoriesService = new ListCategoriesService(categoriesRepository)
  const categories = listCategoriesService.execute()

  response.status(201).json(categories)
})

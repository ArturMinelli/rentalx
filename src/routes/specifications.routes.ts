import { Router } from 'express'

export const specificationsRoutes = Router()

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.execute({ name, description })

  response.status(201).send()
})

specificationsRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list()

  response.status(201).json(categories)
})

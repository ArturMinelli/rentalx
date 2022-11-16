import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const categoryAlreadyExists = categoriesRepository.findByName(name)
  if(categoryAlreadyExists) {
    response.status(409).json({ message: "Category already exists!" })
  }

  categoriesRepository.create({name, description})
  response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list()

  response.status(201).json(categories)
})

import { request, response, Router } from 'express'

const categoriesRoutes = Router()

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body

  const newCategory = {
    id: new Date().toISOString(),
    name,
    description,
    createdAt: new Date().toISOString()
  }

  response.status(201).json({ newCategory })
})

export { categoriesRoutes }
import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const newCategory = {
    id: uuidv4(),
    name,
    description,
    createdAt: new Date().toISOString()
  }

  response.status(201).json({ newCategory })
})

export { categoriesRoutes }
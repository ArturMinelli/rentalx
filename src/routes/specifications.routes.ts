import { Router } from 'express'
import { SpecificationsRepository } from '../repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../services/CreateSpecificationService'
import { ListSpecificationsService } from '../services/ListSpecificationsService'

export const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createSpecificationService = new CreateSpecificationService(specificationsRepository)
  createSpecificationService.execute({ name, description })

  response.status(201).send()
})

specificationsRoutes.get('/', (request, response) => {
  const listSpecificationsService = new ListSpecificationsService(specificationsRepository)
  const specifications = listSpecificationsService.execute()

  response.status(201).json(specifications)
})

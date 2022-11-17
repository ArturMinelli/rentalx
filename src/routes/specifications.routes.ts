import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'
import { ListSpecificationsService } from '../modules/cars/services/ListSpecificationsService'

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

  response.status(200).json(specifications)
})

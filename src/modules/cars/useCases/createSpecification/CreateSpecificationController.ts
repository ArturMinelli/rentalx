import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {


  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)

    try {
      await createSpecificationUseCase.execute({ name, description })
    }
    catch (error) {
      return response.status(400).json({ error: error.message })
    }

    return response.status(201).send()
  }
}
import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase';

export class CreateSpecificationController {


  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    const createSpecificationUseCase = container.resolve(CreateCategoryUseCase)
    await createSpecificationUseCase.execute({ name, description })

    return response.status(201).send()
  }
}
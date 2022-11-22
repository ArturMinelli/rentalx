import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {

  async handle(request: Request, response: Response) {

    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
    const specifications = await listSpecificationsUseCase.execute()

    return response.status(200).json(specifications)
  }
}

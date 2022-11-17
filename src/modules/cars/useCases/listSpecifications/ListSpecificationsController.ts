import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {
    this.listSpecificationsUseCase = listSpecificationsUseCase
  }

  handle(request: Request, response: Response) {
    const specifications = this.listSpecificationsUseCase.execute()

    return response.status(200).json(specifications)
  }
}
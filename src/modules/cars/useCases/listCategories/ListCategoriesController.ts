import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesUseCase
  }

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute()

    return response.status(200).json(categories)
  }
}
import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const categories = await this.listCategoriesUseCase.execute()
    return response.status(200).json(categories)
  }
}
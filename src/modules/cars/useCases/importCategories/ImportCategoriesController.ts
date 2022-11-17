import { Request, Response } from 'express'
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

export class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {
    this.importCategoriesUseCase = importCategoriesUseCase
  }

  handle(request: Request, response: Response): Response {
    const { file } = request

    this.importCategoriesUseCase.execute(file)

    return response.status(201).send()
  }
}

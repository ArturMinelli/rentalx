import { Request, Response } from 'express'
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

export class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {
    this.importCategoriesUseCase = importCategoriesUseCase
  }

  handle(request: Request, response: Response): Response {
    const { file } = request

    console.log(file)

    return response.send()
  }
}

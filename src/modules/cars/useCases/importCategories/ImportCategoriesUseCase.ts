import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

export class ImportCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute(filePath: string) {

  }
}

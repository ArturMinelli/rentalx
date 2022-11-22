import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

export default (): ImportCategoriesController => {
  const categoriesRespository =  new CategoriesRepository
  const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRespository)

  const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase)

  return importCategoriesController
}

import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const categoriesRespository =  CategoriesRepository.getInstance()
const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRespository)

export const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase)

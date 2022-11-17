import { ICategoryRepository } from "../repositories/ICategoryRepository";

export class ListCategoriesService {
  constructor(private categoriesRepository: ICategoryRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute() {
    return this.categoriesRepository.list()
  }
}
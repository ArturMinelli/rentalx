import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

export class ListCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute() {
    return this.categoriesRepository.list()
  }
}
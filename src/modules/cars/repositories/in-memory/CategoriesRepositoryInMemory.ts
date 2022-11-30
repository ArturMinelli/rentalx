import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

export class CategoriesRepositoryInMemory implements ICategoriesRepository {

  public categories: Category[]

  constructor() {
    this.categories = []
  }

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name)

    if(!category) {
      throw new Error(`Category '${name}' could not be found`)
    }

    return category
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }

  async list(): Promise<Category[]> {
    return this.categories
  }

}
import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name, description }): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    return await this.repository.find()
  }

  async findByName(name: string): Promise<Category> {
    return this.repository.findOne({
      where: {
        name,
      }
    })
  }
}

import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { CreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  async create({ name, description }: CreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    })

    await this.repository.save(specification)
  }

  async findByName(name: string): Promise<Specification> {
    return await this.repository.findOne({
      where: {
        name,
      }
    })
  }

  async list(): Promise<Specification[]> {
    return await this.repository.find()
  }
}
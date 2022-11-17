import { Specification } from "../../model/Specification";
import { CreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  private static INSTANCE: SpecificationsRepository

  private constructor() {
    this.specifications = []
  }

  public static getInstance(): SpecificationsRepository {
    if(!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }

    return SpecificationsRepository.INSTANCE
  }

  findByName(name: string): Specification {
    return this.specifications.find((specification) => specification.name === name)
  }

  create({ name, description }: CreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  list(): Specification[] {
    return this.specifications
  }
}
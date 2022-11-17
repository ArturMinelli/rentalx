import { CreateSpecificationDTO, ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute({ name, description }: CreateSpecificationDTO) {

    const specificationAlreadyExists = this.specificationsRepository.findByName(name)
    if(specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`)
    }

    this.specificationsRepository.create({ name, description })
  }
}
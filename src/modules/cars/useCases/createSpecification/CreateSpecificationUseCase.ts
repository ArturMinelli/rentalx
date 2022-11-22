import { inject, injectable } from 'tsyringe'
import { CreateSpecificationDTO, ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: CreateSpecificationDTO) {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name)

    if(specificationAlreadyExists) {
      throw new Error(`Specification '${name}' already exists`)
    }

    this.specificationsRepository.create({ name, description })
  }
}
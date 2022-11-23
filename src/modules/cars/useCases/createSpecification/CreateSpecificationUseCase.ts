import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError';
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
      throw new AppError(`Specification '${name}' already exists`)
    }

    this.specificationsRepository.create({ name, description })
  }
}
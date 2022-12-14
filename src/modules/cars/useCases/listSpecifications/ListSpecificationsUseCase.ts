import { inject, injectable } from 'tsyringe'
import { Specification } from '../../infra/typeorm/entities/Specification';
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    return await this.specificationsRepository.list()
  }
}
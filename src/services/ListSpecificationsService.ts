import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

export class ListSpecificationsService {
  constructor(private specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute() {
    return this.specificationsRepository.list()
  }
}
import { inject, injectable } from 'tsyringe'
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: UsersRepository
  ) {}

  async execute(): Promise<void> {

  }
}
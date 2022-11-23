import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { AppError } from '../../../../errors/AppError';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository
  ) {}

  async execute({
    name, email, password, driver_license
  }: ICreateUserDTO): Promise<void> {

    const emailAlreadyExists = await this.usersRepository.findByEmail(email)
    if(emailAlreadyExists) {
      throw new AppError(`Email '${email}' is already being used`)
    }

    const hashedPassword = await hash(password, 8)

    await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      driver_license
    })
  }
}
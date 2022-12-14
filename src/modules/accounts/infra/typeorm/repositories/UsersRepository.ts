import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor(){
    this.repository = getRepository(User)
  }

  async create({
    driver_license,
    email,
    name,
    password,
    avatar,
    id
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      driver_license,
      email,
      name,
      password,
      id,
      avatar
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({
      where: {
        email
      }
    })
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOne({
      where: {
        id
      }
    })
  }
}
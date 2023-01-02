import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthUserUseCase } from "./AuthUserUseCase";

let authUserUseCase: AuthUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authUserUseCase = new AuthUserUseCase(usersRepositoryInMemory);
  })

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      name: "John",
      email: "john@gmail.com",
      password: "12345678",
      driver_license: "46465135649845",
    }

    await createUserUseCase.execute(user)

    const result = await authUserUseCase.execute({
      email: user.email,
      password: user.password
    })

    expect(result).toHaveProperty('token')
  });

  it("should not be able to authenticate a non existing user", async () => {
    expect(async () => {
      const result = await authUserUseCase.execute({
        email: "john@gmail.com",
        password: "12345678"
      })
    }).rejects.toBeInstanceOf(AppError)
  });

  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: "John",
        email: "john@gmail.com",
        password: "12345678",
        driver_license: "46465135649845",
      }

      await createUserUseCase.execute(user)

      const result = await authUserUseCase.execute({
        email: user.email,
        password: '1234567'
      })
    }).rejects.toBeInstanceOf(AppError)
  });
})

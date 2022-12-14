import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthUserUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.repository.findByEmail(email)

    if (!user) {
      throw new AppError(`Email or password mismatch`)
    }

    const passwordMatches = await compare(password, user.password)
    if(!passwordMatches) {
      throw new AppError(`Email or password mismatch`)
    }

    const token = sign({}, '0933df88b0665419d5003d17d9faa3fb', {
      subject: user.id,
      expiresIn: "1d"
    })

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token
    }
  }
}
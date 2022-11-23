import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction): Promise<void>{
  const authHeader = request.headers.authorization

  if(!authHeader) {
    throw new AppError("Authentication token missing", 401)
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(token, '0933df88b0665419d5003d17d9faa3fb') as IPayload

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(user_id)
    if(!user) {
      throw new AppError(`User with id '${user_id}' could not be found`, 401)
    }

    next()
  }
  catch (error) {
    throw new AppError('Invalid authentication token', 401)
  }
}
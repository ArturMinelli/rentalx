import { Request, Response } from 'express'

export class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {

    return response.status(200).send()
  }
}
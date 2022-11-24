import { Request, Response } from 'express'
import {  } from 'tsyringe'

export class UpdateUserAvatarController {

  async handle(request: Request, response: Response): Promise<void> {
    const { id: user_id } = request.user

  }
}
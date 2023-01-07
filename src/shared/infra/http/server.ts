import "reflect-metadata";

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import { router } from './routes'

import swaggerFile from '../../../swagger.json'

import "../database"

import '../../container'
import { AppError } from "../../errors/AppError";

const app = express()

app.use(express.json())

app.use(router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({ error: error.message })
  }

  return response.status(500).json({
    status: "error",
    error: `Internal server error: ${error.message}`,
  })
})

app.listen(3333, () => console.log('listening'))

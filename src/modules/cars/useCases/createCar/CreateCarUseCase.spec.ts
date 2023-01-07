import { AppError } from "../../../../shared/errors/AppError"
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO"
import { ICarsRepository } from "../../repositories/ICarsRepository"
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepository: ICarsRepository

describe('Create Car', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepository)
  })

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'new car',
      brand: 'new car',
      category_id: null,
      daily_rate: 100,
      description: 'new car description',
      fine_amount: 45,
      license_plate: 'ABC-1234'
    })

    expect(car).toHaveProperty('id')

    expect(car).toMatchObject({
      name: 'new car',
      brand: 'new car',
      category_id: null,
      daily_rate: 100,
      description: 'new car description',
      fine_amount: 45,
      license_plate: 'ABC-1234'
    })
  })

  it('should not be able to create a new car if license plate already exists', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'first car',
        brand: 'first car',
        category_id: null,
        daily_rate: 100,
        description: 'first car description',
        fine_amount: 45,
        license_plate: 'ABC-1234'
      })

      await createCarUseCase.execute({
        name: 'second car',
        brand: 'second car',
        category_id: null,
        daily_rate: 100,
        description: 'second car description',
        fine_amount: 45,
        license_plate: 'ABC-1234'
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should always create car with default availabilty as true', async () => {
    const car = await createCarUseCase.execute({
      name: 'second car',
      brand: 'second car',
      category_id: null,
      daily_rate: 100,
      description: 'second car description',
      fine_amount: 45,
      license_plate: 'ABC-1234',
      available: false
    } as ICreateCarDTO)

    expect(car.available).toBe(true)
  })
})
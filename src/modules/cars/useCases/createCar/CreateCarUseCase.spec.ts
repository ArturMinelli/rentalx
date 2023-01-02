import { ICarsRepository } from "../../repositories/ICarsRepository"
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepository: ICarsRepository = new CarsRepositoryInMemory()

describe('Create Car', () => {
  beforeEach(() => {
    createCarUseCase = new CreateCarUseCase(carsRepository)
  })

  it('should be able to create a new car', async () => {
    await createCarUseCase.execute({
      name: 'new car',
      brand: 'new car',
      category_id: null,
      daily_rate: 100,
      description: 'new car description',
      fine_amount: 45,
      license_plate: 'wqdqwdq'
    })
  })
})
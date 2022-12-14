import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
export class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate
  }: IRequest): Promise<Car> {

    const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate)
    if (carAlreadyExists) {
      throw new AppError(`Car with license plate '${license_plate}' already exists`)
    }

    const car = this.carsRepository.create({
      name,
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate
    })

    return car
  }
}
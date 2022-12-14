import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository {

  public cars: Car[]

  constructor() {
    this.cars = []
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car()

    Object.assign(car, data)

    this.cars.push(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
      const car = this.cars.find((car) => car.license_plate === license_plate)

      return car
  }
}
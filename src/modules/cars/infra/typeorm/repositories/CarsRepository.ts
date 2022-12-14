import { getRepository, Repository } from "typeorm";
import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>

  constructor() {
    this.repository = getRepository(Car)
  }

  async create({
    name, brand, description, daily_rate, fine_amount, license_plate, category_id
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      brand,
      description,
      daily_rate,
      fine_amount,
      license_plate,
      category_id
    })

    this.repository.save(car)

    return car
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.repository.findOne({
      where: {
        license_plate
      }
    })

    return car
  }
}
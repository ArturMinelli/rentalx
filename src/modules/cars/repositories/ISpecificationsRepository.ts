import { Specification } from "../infra/typeorm/entities/Specification";

export interface CreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  findByName: (name: string) => Promise<Specification>;
  create: ({ name, description }: CreateSpecificationDTO) => Promise<void>;
  list: () => Promise<Specification[]>;
}
import { Specification } from "../model/Specification";

export interface CreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  findByName: (name: string) => Specification;
  create: ({ name, description }: CreateSpecificationDTO) => void;
  list: () => Specification[];
}
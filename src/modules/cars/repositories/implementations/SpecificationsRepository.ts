import { Specification } from '../../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specificatios: Specification[];

  constructor() {
    this.specificatios = [];
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specificatios.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specificatios.find(
      specification => specification.name === name,
    );

    return specification;
  }
}

export { SpecificationsRepository };

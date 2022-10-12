import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OrganizationModel } from './models/organization.model';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(OrganizationModel)
    private orgRepository: typeof OrganizationModel,
  ) {}

  async createOrg(dto) {
    const data = await this.orgRepository.create(dto);
    return data;
  }

  async getAll() {
    const data = await this.orgRepository.findAll({ include: { all: true } });
    return data;
  }

  // @ts-ignore
  async getByType(type: string): Promise<OrganizationModel[]> {
    const data = await this.orgRepository.findAll({where: {type: type} } )
    return data;
  }
}

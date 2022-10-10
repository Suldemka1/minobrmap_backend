import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Map } from './data.model';

@Injectable()
export class DataService {
  constructor(@InjectModel(Map) private imapRepository: typeof Map){}

  async getAll() {
    const data = await this.imapRepository.findAll({include: {all: true}})
    return data
  }
}

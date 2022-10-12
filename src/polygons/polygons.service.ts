import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { PolygonsModel } from "./polygons.model";

@Injectable()
export class PolygonsService {
  constructor(@InjectModel(PolygonsModel) private polygonsRepository: typeof PolygonsModel) {
  }

  async getAll() {
    const data = await this.polygonsRepository.findAll({ include: { all: true } })
    return data
  }
}

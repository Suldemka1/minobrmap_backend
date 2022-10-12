import { Module } from '@nestjs/common';
import { PolygonsService } from './polygons.service';
import { PolygonsController } from './polygons.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { PolygonsModel } from "./polygons.model";

@Module({
  providers: [PolygonsService],
  controllers: [PolygonsController],
  imports: [SequelizeModule.forFeature([PolygonsModel])],
})
export class PolygonsModule {}

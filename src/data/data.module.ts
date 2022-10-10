import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DataController } from './data.controller';
import { Map } from './data.model';
import { DataService } from './data.service';

@Module({
  controllers: [DataController],
  providers: [DataService],
  imports: [SequelizeModule.forFeature([Map])]
})
export class DataModule {}

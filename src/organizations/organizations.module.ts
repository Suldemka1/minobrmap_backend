import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrganizationModel } from './models/organization.model';

@Module({
  providers: [OrganizationsService],
  controllers: [OrganizationsController],
  imports: [SequelizeModule.forFeature([OrganizationModel])],
})
export class OrganizationsModule {}

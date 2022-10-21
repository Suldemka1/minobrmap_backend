import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrganizationsModule } from './organizations/organizations.module';
import { OrganizationModel } from './organizations/models/organization.model';
import 'dotenv/config';
import { PolygonsModule } from './polygons/polygons.module';
import { PolygonsModel } from './polygons/polygons.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DBHOST,
      port: Number(process.env.DBPORT),
      username: process.env.DBUSERNAME,
      password: process.env.DBPASSWORD,
      database: process.env.DBNAME,
      models: [OrganizationModel, PolygonsModel],
      autoLoadModels: true,
      define: {
        timestamps: false,
      },
    }),
    OrganizationsModule,
    PolygonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

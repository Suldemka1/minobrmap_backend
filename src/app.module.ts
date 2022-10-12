import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {ServeStaticModule} from '@nestjs/serve-static'
import { Map } from './data/data.model';
import { DataModule } from './data/data.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { OrganizationModel } from './organizations/models/organization.model';
import 'dotenv/config';
import {join} from 'path'
import { PolygonsModule } from './polygons/polygons.module';
import { PolygonsModel } from "./polygons/polygons.model";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DBHOST,
      port: Number(process.env.DBPORT),
      username: process.env.DBUSERNAME,
      password: process.env.DBPASSWORD,
      database: process.env.DBNAME,
      models: [Map, OrganizationModel, PolygonsModel],
      autoLoadModels: true,
      define: {
        timestamps: false,
      },
    }),
    DataModule,
    OrganizationsModule,
    PolygonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

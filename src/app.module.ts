import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Map } from './data/data.model';
import { DataModule } from './data/data.module';
require('dotenv').config()

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'adminroot',
      database: 'newschema',
      models: [Map],
      autoLoadModels: true,
      define: {
        timestamps: false
      }
    }),
    DataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

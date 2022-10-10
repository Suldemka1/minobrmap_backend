import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('api')
export class DataController {

  constructor(private dataService: DataService){}

  @Get('/data')
  async getRows() {
    const data = await this.dataService.getAll()
    return data
  }
}

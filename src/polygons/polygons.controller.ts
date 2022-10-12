import { Controller, Get } from "@nestjs/common";
import { PolygonsService } from "./polygons.service";

@Controller('api')
export class PolygonsController {
  constructor(private polygonsService: PolygonsService) {
  }

  @Get('/polygons')
  getAll() {
    const data = this.polygonsService.getAll()
    return data
  }
}

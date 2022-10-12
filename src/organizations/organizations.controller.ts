import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrganizationsService } from './organizations.service';
import { CreateOrgDto } from "./dto/create-org-dto";

@Controller('api')
export class OrganizationsController {
  constructor(private orgService: OrganizationsService) {
  }

  @Post('/datalist')
  async create(@Body() dto: CreateOrgDto) {
    const data = await this.orgService.createOrg(dto);
    return data;
  }

  @Get('/datalist')
  async getAll() {
    const data = await this.orgService.getAll()
    return data
  }

  @Get('/datalist/:type')
  async getByType(@Param('type') string) {
    const data = await this.orgService.getByType(string)
    return data
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyDataService } from './company-data.service';
import { CreateCompanyDatumDto } from './dto/create-company-datum.dto';
import { UpdateCompanyDatumDto } from './dto/update-company-datum.dto';

@Controller('company-data')
export class CompanyDataController {
  constructor(private readonly companyDataService: CompanyDataService) {}

  @Post()
  create(@Body() createCompanyDatumDto: CreateCompanyDatumDto) {
    return this.companyDataService.create(createCompanyDatumDto);
  }

  @Get()
  findAll() {
    return this.companyDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDatumDto: UpdateCompanyDatumDto) {
    return this.companyDataService.update(+id, updateCompanyDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyDataService.remove(+id);
  }
}

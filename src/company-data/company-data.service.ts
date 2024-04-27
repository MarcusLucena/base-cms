import { Injectable } from '@nestjs/common';
import { CreateCompanyDatumDto } from './dto/create-company-datum.dto';
import { UpdateCompanyDatumDto } from './dto/update-company-datum.dto';

@Injectable()
export class CompanyDataService {
  create(createCompanyDatumDto: CreateCompanyDatumDto) {
    return 'This action adds a new companyDatum';
  }

  findAll() {
    return `This action returns all companyData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyDatum`;
  }

  update(id: number, updateCompanyDatumDto: UpdateCompanyDatumDto) {
    return `This action updates a #${id} companyDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyDatum`;
  }
}

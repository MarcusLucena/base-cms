import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDatumDto } from './create-company-datum.dto';

export class UpdateCompanyDatumDto extends PartialType(CreateCompanyDatumDto) {}

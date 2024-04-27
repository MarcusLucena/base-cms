import { Module } from '@nestjs/common';
import { CompanyDataService } from './company-data.service';
import { CompanyDataController } from './company-data.controller';

@Module({
  controllers: [CompanyDataController],
  providers: [CompanyDataService],
})
export class CompanyDataModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(
    private readonly companiesService: CompaniesService,
  ) {}

@Get()
async findAll() {
  return this.companiesService.findAll();
}

@Post()
async create(
  @Body() createCompanyDto: CreateCompanyDto,
) {
  return this.companiesService.create(
    createCompanyDto,
  );
  }
}
import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './schemas/company.schema';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name)
    private companyModel: Model<Company>,
  ) {}

  async findAll() {
    return this.companyModel.find();
  }

  async create(createCompanyDto: CreateCompanyDto) {
    const company = new this.companyModel(
      createCompanyDto,
    );

    return company.save();
  }
}
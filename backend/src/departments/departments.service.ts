import {
  Injectable,
  ConflictException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateDepartmentDto } from './dto/create-department.dto';

import { Department } from './schemas/department.schema';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel(Department.name)
    private departmentModel: Model<Department>,
  ) {}

 async findAll() {
  return this.departmentModel
    .find()
    .populate('companyId');
}

  async create(
    createDepartmentDto: CreateDepartmentDto,
  ) {
    try {
      const department =
        new this.departmentModel(
          createDepartmentDto,
        );

      return await department.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException(
          'Department already exists',
        );
      }

      throw error;
    }
  }
}
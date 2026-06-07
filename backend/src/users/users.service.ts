import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';

import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async findAll() {
    return this.userModel.find();
  }

  async create(
    createUserDto: CreateUserDto,
  ) {
    return this.userModel.create({
      login: createUserDto.login,
      passwordHash: createUserDto.password, // временно
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      middleName: createUserDto.middleName,
      email: createUserDto.email,
      phone: createUserDto.phone,
      role: createUserDto.role,
      companyIds: createUserDto.companyIds,
      departmentIds: createUserDto.departmentIds,
      defaultCompanyId:
        createUserDto.defaultCompanyId,
      defaultDepartmentId:
        createUserDto.defaultDepartmentId,
    });
  }
}
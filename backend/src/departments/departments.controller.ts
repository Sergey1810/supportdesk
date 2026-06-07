import { Body, Controller, Get, Post } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(
    private readonly departmentsService: DepartmentsService,
  ) {}

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Post()
  create(
    @Body() createDepartmentDto: CreateDepartmentDto,
  ) {
    return this.departmentsService.create(
      createDepartmentDto,
    );
  }
}
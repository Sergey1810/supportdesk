import {
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';

import { UserRole } from '../schemas/user.schema';

export class CreateUserDto {
  @ApiProperty({
    example: 'ivanov',
  })
  @IsString()
  login: string;

  @ApiProperty({
    example: 'Password123',
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'Иван',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Иванов',
  })
  @IsString()
  lastName: string;

  @ApiPropertyOptional({
    example: 'Иванович',
  })
  @IsOptional()
  @IsString()
  middleName?: string;

  @ApiPropertyOptional({
    example: 'ivanov@company.ru',
  })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional({
    example: '+79991234567',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    enum: UserRole,
  })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({
    type: [String],
    example: ['companyId1'],
  })
  @IsArray()
  companyIds: string[];

  @ApiProperty({
    type: [String],
    example: ['departmentId1'],
  })
  @IsArray()
  departmentIds: string[];

  @ApiPropertyOptional({
    example: 'companyId1',
  })
  @IsOptional()
  @IsString()
  defaultCompanyId?: string;

  @ApiPropertyOptional({
    example: 'departmentId1',
  })
  @IsOptional()
  @IsString()
  defaultDepartmentId?: string;
}
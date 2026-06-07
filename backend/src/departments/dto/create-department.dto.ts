import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({
    example: 'IT',
    description: 'Название подразделения',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'COMPANY_ID',
    description: 'Идентификатор компании',
  })
  @IsString()
  @IsNotEmpty()
  companyId: string;

  @ApiPropertyOptional({
    example: 'Отдел информационных технологий',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
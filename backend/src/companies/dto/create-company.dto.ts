import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({
    example: 'ООО Ромашка',
    description: 'Название компании',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    example: 'ROMASHKA',
    description: 'Код компании',
  })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    example: 'Ромашка',
  })
  @IsOptional()
  @IsString()
  shortName?: string;

  @ApiPropertyOptional({
    example: 'Главный офис',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
import {
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

import {
  ApiProperty,
} from '@nestjs/swagger';

import {
  TicketPriority,
} from '../schemas/ticket.schema';

export class CreateTicketDto {
  @ApiProperty({
    example: 'Не работает принтер',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'После обновления Windows не печатает',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: '6842b4d7e123456789abcdef',
  })
  @IsString()
  @IsNotEmpty()
  companyId: string;

  @ApiProperty({
    example: '6842b4d7e123456789abcdef',
  })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({
    example: '6842b4d7e123456789abcdef',
  })
  @IsString()
  @IsNotEmpty()
  authorId: string;

  @ApiProperty({
    example: '6842b4d7e123456789abcdef',
  })
  @IsString()
  @IsNotEmpty()
  authorDepartmentId: string;

  @ApiProperty({
    example: '6842b4d7e123456789abcdef',
  })
  @IsString()
  @IsNotEmpty()
  currentDepartmentId: string;

  @ApiProperty({
    enum: TicketPriority,
    example: TicketPriority.HIGH,
  })
  @IsEnum(TicketPriority)
  priority: TicketPriority;
}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Department {
  @Prop({
    required: true,
  })
  name: string;

@Prop({
  type: Types.ObjectId,
  ref: 'Company',
  required: true,
})
companyId: Types.ObjectId;

  @Prop()
  description?: string;

  @Prop({
    default: true,
  })
  isActive: boolean;
}

export const DepartmentSchema =
  SchemaFactory.createForClass(
    Department,
  );

DepartmentSchema.index(
  {
    name: 1,
    companyId: 1,
  },
  {
    unique: true,
  },
);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Category {
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


export const CategorySchema =
  SchemaFactory.createForClass(Category);

CategorySchema.index(
  {
    name: 1,
    companyId: 1,
  },
  {
    unique: true,
  },
);
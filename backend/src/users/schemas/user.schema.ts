import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export enum UserRole {
  ADMIN = 'ADMIN',
  ENGINEER = 'ENGINEER',
  USER = 'USER',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    required: true,
    unique: true,
  })
  login: string;

  @Prop({
    required: true,
  })
  passwordHash: string;

  @Prop({
    required: true,
  })
  firstName: string;

  @Prop({
    required: true,
  })
  lastName: string;

  @Prop()
  middleName?: string;

  @Prop()
  email?: string;

  @Prop()
  phone?: string;

  @Prop({
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Prop([
    {
      type: Types.ObjectId,
      ref: 'Company',
    },
  ])
  companyIds: Types.ObjectId[];

  @Prop([
    {
      type: Types.ObjectId,
      ref: 'Department',
    },
  ])
  departmentIds: Types.ObjectId[];

  @Prop({
    type: Types.ObjectId,
    ref: 'Company',
  })
  defaultCompanyId?: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Department',
  })
  defaultDepartmentId?: Types.ObjectId;

  @Prop({
    default: true,
  })
  isActive: boolean;

  @Prop()
  lastLoginAt?: Date;
}

export const UserSchema =
  SchemaFactory.createForClass(User);
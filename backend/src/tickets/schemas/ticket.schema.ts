import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export enum TicketStatus {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  WAITING_USER = 'WAITING_USER',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
  CANCELLED = 'CANCELLED',
}

export enum TicketPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

@Schema({
  timestamps: true,
})
export class Ticket {
  @Prop({
    required: true,
    unique: true,
  })
  number: string;

  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop()
  resolution?: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Company',
    required: true,
  })
  companyId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  categoryId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  authorId?: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Department',
    required: true,
  })
  authorDepartmentId?: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Department',
    required: true,
  })
  currentDepartmentId?: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
  })
  assignedEngineerId?: Types.ObjectId;

  @Prop({
    enum: TicketStatus,
    default: TicketStatus.NEW,
  })
  status: TicketStatus;

  @Prop({
    enum: TicketPriority,
    default: TicketPriority.MEDIUM,
  })
  priority: TicketPriority;

  @Prop()
  closedAt?: Date;
}

export const TicketSchema =
  SchemaFactory.createForClass(Ticket);

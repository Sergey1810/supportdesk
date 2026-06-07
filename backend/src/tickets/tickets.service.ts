import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';

import {
    Ticket,
    TicketPriority,
    TicketStatus,
} from './schemas/ticket.schema';

@Injectable()
export class TicketsService {
    constructor(
        @InjectModel(Ticket.name)
        private ticketModel: Model<Ticket>,
    ) { }

    async findAll() {
        return this.ticketModel
            .find()
            .populate('companyId')
            .populate('categoryId')
            .populate('authorId')
            .populate('authorDepartmentId')
            .populate('currentDepartmentId');
    }
async findOne(id: string) {
  return this.ticketModel
    .findById(id)
    .populate('companyId')
    .populate('categoryId')
    .populate('authorId')
    .populate('authorDepartmentId')
    .populate('currentDepartmentId')
    .exec();
}
async updateStatus(
  id: string,
  updateTicketStatusDto: UpdateTicketStatusDto,
) {
  return this.ticketModel
    .findByIdAndUpdate(
      id,
      {
        status: updateTicketStatusDto.status,
      },
      {
        new: true,
      },
    )
    .populate('companyId')
    .populate('categoryId')
    .populate('authorId')
    .populate('authorDepartmentId')
    .populate('currentDepartmentId')
    .exec();
}
    async create(
        createTicketDto: CreateTicketDto,
    ) {
        const ticketNumber = `SD-${Date.now()}`;

        return this.ticketModel.create({
            number: ticketNumber,

            title: createTicketDto.title,
            description:
                createTicketDto.description,

            companyId:
                createTicketDto.companyId,

            categoryId:
                createTicketDto.categoryId,

            priority:
                createTicketDto.priority ||
                TicketPriority.MEDIUM,

            status: TicketStatus.NEW,

            // временно заглушки
            authorId:
                createTicketDto.authorId,

            authorDepartmentId:
                createTicketDto.authorDepartmentId,

            currentDepartmentId:
                createTicketDto.currentDepartmentId,
        });
    }
}
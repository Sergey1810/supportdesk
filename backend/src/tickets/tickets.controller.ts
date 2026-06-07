import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';

import { TicketsService } from './tickets.service';

import { CreateTicketDto } from './dto/create-ticket.dto';

@Controller('tickets')
export class TicketsController {
    constructor(
        private readonly ticketsService: TicketsService,
    ) { }

    @Get()
    async findAll() {
        return this.ticketsService.findAll();
    }
    @Get(':id')
    async findOne(
        @Param('id') id: string,
    ) {
        return this.ticketsService.findOne(id);
    }
    @Patch(':id/status')
    async updateStatus(
        @Param('id') id: string,
        @Body() updateTicketStatusDto: UpdateTicketStatusDto,
    ) {
        return this.ticketsService.updateStatus(
            id,
            updateTicketStatusDto,
        );
    }

    @Post()
    async create(
        @Body()
        createTicketDto: CreateTicketDto,
    ) {
        return this.ticketsService.create(
            createTicketDto,
        );
    }
}
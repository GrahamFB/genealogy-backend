import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Patch,
  All,
  Req,
  Next,
  Inject,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { Request, NextFunction } from "express";
import { Logger } from "winston";
import { Operation, applyPatch } from 'fast-json-patch';
import { CreateEventDto } from "./dto/create-event.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Event } from "./interfaces/event.interface";

const prefix = "api/v1/event";

// TODO (simon) - Add error handling and validation
@Controller(prefix)
@ApiTags('people')
export class EventController {
  constructor(
    @Inject("EventService") private readonly eventService: EventService,
    @Inject("winston") private readonly logger: Logger,
  ) {}

  @All()
  async logMiddleware(@Req() request: Request, @Next() next: NextFunction) {
    this.logger.debug(request.method + " " + prefix + request.path);
    next();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  async create(@Body() eventDto: CreateEventDto): Promise<Event> {
    return this.eventService.create(eventDto);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Put(":id")
  async put(@Param("id") id: string, @Body() event: Event): Promise<Event> {
    return this.eventService.update(id, event);
  }

  @Patch(":id")
  async patch(@Param("id") id: string, @Body() patch: Operation[]): Promise<Event> {
    let event: Event = await this.eventService.findOne(id);

    event = applyPatch(event, patch).newDocument;

    return this.eventService.update(id, event);
  }
}

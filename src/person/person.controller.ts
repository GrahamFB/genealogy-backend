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
import { PersonService } from "./person.service";
import { Person } from "./person.interface";
import { Request, NextFunction } from "express";
import { Logger } from "winston";
import { Operation, applyPatch } from 'fast-json-patch';

const prefix = "api/v1/person";

// TODO (simon) - Add error handling and validation
@Controller(prefix)
export class PersonController {
  constructor(
    @Inject("PersonService") private readonly personService: PersonService,
    @Inject("winston") private readonly logger: Logger,
  ) {}

  @All()
  async logMiddleware(@Req() request: Request, @Next() next: NextFunction) {
    this.logger.debug(request.method + " " + prefix + request.path);
    next();
  }

  @Post()
  async create(@Body() person: Person): Promise<Person> {
    return this.personService.create(person);
  }

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Person> {
    return this.personService.findOne(id);
  }

  @Put(":id")
  async put(@Param("id") id: string, @Body() person: Person): Promise<Person> {
    return this.personService.update(id, person);
  }

  @Patch(":id")
  async patch(@Param("id") id: string, @Body() patch: Operation[]): Promise<Person> {
    let person: Person = await this.personService.findOne(id);

    person = applyPatch(person, patch).newDocument;

    return this.personService.update(id, person);
  }
}

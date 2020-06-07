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
import { RelationshipService } from "./relationship.service";
import { Request, NextFunction } from "express";
import { Logger } from "winston";
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Operation, applyPatch } from 'fast-json-patch';
import { CreateRelationshipDto } from "./dto/create-relationship.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Relationship } from "./interfaces/relationship.interface";

const prefix = "api/v1/relationship";

// TODO (simon) - Add error handling and validation
@Controller(prefix)
@ApiTags('people')
export class RelationshipController {
  constructor(
    @Inject("RelationshipService") private readonly relationshipService: RelationshipService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @All()
  async logMiddleware(@Req() request: Request, @Next() next: NextFunction) {
    this.logger.debug(request.method + " " + prefix + request.path);
    next();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  async create(@Body() relationshipDto: CreateRelationshipDto): Promise<Relationship> {
    return this.relationshipService.create(relationshipDto);
  }

  @Get()
  async findAll(): Promise<Relationship[]> {
    return this.relationshipService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Relationship> {
    return this.relationshipService.findOne(id);
  }

  @Put(":id")
  async put(@Param("id") id: string, @Body() relationship: Relationship): Promise<Relationship> {
    return this.relationshipService.update(id, relationship);
  }

  @Patch(":id")
  async patch(@Param("id") id: string, @Body() patch: Operation[]): Promise<Relationship> {
    let relationship: Relationship = await this.relationshipService.findOne(id);

    relationship = applyPatch(relationship, patch).newDocument;

    return this.relationshipService.update(id, relationship);
  }
}

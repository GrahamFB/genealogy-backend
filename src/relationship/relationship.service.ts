import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Relationship } from "./interfaces/relationship.interface";
import * as mongoose from "mongoose";
import { CreateRelationshipDto } from "./dto/create-relationship.dto";

@Injectable()
export class RelationshipService {
  constructor(
    @InjectModel("Relationship") private readonly relationshipModel: Model<Relationship>
  ) {}

  async create(relationshipDto: CreateRelationshipDto): Promise<Relationship> {
    const p = new this.relationshipModel(relationshipDto);
    return p.save();
  }

  async findAll(): Promise<Relationship[]> {
    return this.relationshipModel.find().exec();
  }

  async findOne(id: string): Promise<Relationship> {
    return this.relationshipModel.findById(id).exec();
  }

  async update(id: string, relationship: Relationship): Promise<Relationship> {
    //useFindAndModify is deprecated
    mongoose.set('useFindAndModify', false);
    return this.relationshipModel.findByIdAndUpdate(id, relationship, { new: true }).exec();
  }
}

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Person } from "./person.interface";
import * as mongoose from "mongoose";

@Injectable()
export class PersonService {
  constructor(
    @InjectModel("Person") private readonly personModel: Model<Person>
  ) {}

  async create(person: Person): Promise<Person> {
    const p = new this.personModel(person);
    return p.save();
  }

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async findOne(id: string): Promise<Person> {
    return this.personModel.findById(id).exec();
  }

  async update(id: string, person: Person): Promise<Person> {
    //useFindAndModify is deprecated
    mongoose.set('useFindAndModify', false);
    return this.personModel.findByIdAndUpdate(id, person, { new: true }).exec();
  }
}

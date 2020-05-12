import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Person as PersonDocument, Person } from "./interfaces/person.interface";
import * as mongoose from "mongoose";
import { CreatePersonDto } from "./dto/create-person.dto";

@Injectable()
export class PersonService {
  constructor(
    @InjectModel("Person") private readonly personModel: Model<PersonDocument>
  ) {}

  async create(personDto: CreatePersonDto): Promise<Person> {
    const p = new this.personModel(personDto);
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

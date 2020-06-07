import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event as EventDocument, Event as EventModel } from "./interfaces/event.interface";
import * as mongoose from "mongoose";
import { CreateEventDto } from "./dto/create-event.dto";

@Injectable()
export class EventService {
  constructor(
    @InjectModel("Event") private readonly eventModel: Model<EventDocument>
  ) {}

  async create(eventDto: CreateEventDto): Promise<EventModel> {
    const p = new this.eventModel(eventDto);
    return p.save();
  }

  async findAll(): Promise<EventModel[]> {
    return this.eventModel.find().exec();
  }

  async findOne(id: string): Promise<EventModel> {
    return this.eventModel.findById(id).exec();
  }

  async update(id: string, event: EventModel): Promise<EventModel> {
    //useFindAndModify is deprecated
    mongoose.set('useFindAndModify', false);
    return this.eventModel.findByIdAndUpdate(id, event, { new: true }).exec();
  }
}

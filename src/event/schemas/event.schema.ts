import * as mongoose from "mongoose";

export const EventSchema = new mongoose.Schema({
    type: String,
    date: Date,
    place: { original: String,descriptionRef:String},
    roles: Array
}, { timestamps: true });
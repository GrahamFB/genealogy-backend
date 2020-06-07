import * as mongoose from "mongoose";

export const RelationshipSchema = new mongoose.Schema({
    type: String,
    person1: mongoose.Types.ObjectId,
    person2: mongoose.Types.ObjectId,
    facts: Array
}, { timestamps: true });
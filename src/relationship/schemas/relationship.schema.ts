import * as mongoose from "mongoose";

export const RelationshipSchema = new mongoose.Schema({
    type: String,
    person1: String,
    person2: String,
    facts: Array
}, { timestamps: true });
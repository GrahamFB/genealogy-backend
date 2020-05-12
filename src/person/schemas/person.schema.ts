import * as mongoose from "mongoose";

export const PersonSchema = new mongoose.Schema({
    private: Boolean,
    gender: { type: String },
    names: Array,
    facts: Array
}, { timestamps: true });
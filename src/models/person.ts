import { Subject } from "./subject";
import { Gender } from "./gender";
import { Name } from "./name";
import { Fact } from "./fact";
import mongoose from "mongoose";

/**
 * @$id "http://gedcomx.org/v1/Person"
 */
export interface Person extends Subject {
    private?: boolean;
    gender?: Gender;
    names?: Name[];
    facts?: Fact[];
}

export type PersonDocument = mongoose.Document & Person;

const personSchema = new mongoose.Schema({
    private: Boolean,
    gender: { type: String },
    names: Array,
    facts: Array
}, { timestamps: true });

export const Person = mongoose.model<PersonDocument>("Person", personSchema);
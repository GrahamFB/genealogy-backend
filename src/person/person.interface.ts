import { Document } from "mongoose";
import { Person as PersonModel} from "../models/person";

export type Person = PersonModel & Document;
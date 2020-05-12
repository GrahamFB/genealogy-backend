import { Gender } from "../../models/components/gender";
import { Name } from "../../models/components/name";
import { Fact } from "../../models/components/fact";
import { Subject } from "../../models/components/subject";
import { Document } from "mongoose";

/**
 * @$id "http://gedcomx.org/v1/Person"
 */
export interface Person extends Subject, Document {
    readonly private?: boolean;
    readonly gender?: Gender;
    readonly names?: Name[];
    readonly facts?: Fact[];
}
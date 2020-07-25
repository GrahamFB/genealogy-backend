import { RelationshipType } from "src/models/enums/relationshipType";
import { URI } from "src/models/aliases/URI";
import { Subject } from "src/models/components/subject";
import { Fact } from "src/models/components/fact";
import { Document } from "mongoose";

/**
 * @$id "http://gedcomx.org/v1/Person"
 */
export interface Relationship extends Subject, Document { 
    type?: RelationshipType
    person1: URI
    person2: URI
    facts?: Fact[]
}
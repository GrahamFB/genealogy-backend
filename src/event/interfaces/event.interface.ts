import { PlaceReference } from "src/models/components/placeReference";
import { EventType } from "src/models/enums/eventType";
import { EventRole } from "src/models/components/eventRole";
import { Subject } from "src/models/components/subject";
import { Document } from "mongoose";


export interface Event extends Subject, Document {
    readonly type?: EventType
    readonly date?: Date
    readonly place?: PlaceReference
    readonly roles?: EventRole[]
}

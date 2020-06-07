import { Subject } from "../../models/components/subject";
import { ApiProperty } from "@nestjs/swagger";
import { EventType } from "src/models/enums/eventType";
import { PlaceReference } from "src/models/components/placeReference";
import { EventRole } from "src/models/components/eventRole";


/**
 * @$id "http://gedcomx.org/v1/Event"
 */
export class CreateEventDto extends Subject {
    @ApiProperty()
    readonly type?: EventType
    @ApiProperty()
    readonly date?: Date
    @ApiProperty()
    readonly place?: PlaceReference
    @ApiProperty()
    readonly roles?: EventRole[]
}
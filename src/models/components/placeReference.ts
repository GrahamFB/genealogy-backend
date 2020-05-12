import { URI } from "../aliases/URI";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/PlaceReference"
 */
export class PlaceReference {
    @ApiProperty()
    original?: string;

    @ApiProperty({ type: String })
    descriptionRef?: URI;
}
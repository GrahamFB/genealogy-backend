import { FactType } from "../enums/factType";
import { FactQualifier } from "../enums/factQualifier";
import { PlaceReference } from "./placeReference";
import { Conclusion } from "./conclusion";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/Fact"
 */
export class Fact extends Conclusion {
    @ApiProperty({ enum: FactType })
    type: FactType;

    @ApiProperty()
    date?: Date;

    @ApiProperty()
    place?: PlaceReference;

    @ApiProperty()
    value?: string;

    @ApiProperty({ enum: FactQualifier, type: [String] })
    qualifiers?: FactQualifier[];
}
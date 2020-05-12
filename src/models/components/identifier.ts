import { URI } from "../aliases/URI";
import { IdentifierType } from "../enums/identifierType";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/Identifier"
 */
export class Identifier {
    @ApiProperty()
    value: URI;

    @ApiProperty({ enum: IdentifierType })
    type?: IdentifierType;
}
import { Attribution } from "./attribution";
import { Qualifier, QualifierEnum } from "./qualifier";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/SourceReference"
 */
export class SourceReference {
    @ApiProperty()
    description: string;

    @ApiProperty()
    attribution?: Attribution;

    @ApiProperty({ type: [String], enum: QualifierEnum })
    qualifiers?: Qualifier[];
}
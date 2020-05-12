import { ConfidenceLevel } from "../enums/confidenceLevel";
import { Attribution } from "./attribution";
import { SourceReference } from "./sourceReference";
import { Note } from "./note";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/Conclusion"
 */
export class Conclusion {
    @ApiProperty()
    confidence?: ConfidenceLevel;

    @ApiProperty()
    attribution?: Attribution;

    @ApiProperty({ type: [SourceReference] })
    sources?: SourceReference[];

    @ApiProperty({ type: [Note] })
    notes?: Note[];
}
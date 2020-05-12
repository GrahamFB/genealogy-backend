import { Attribution } from "./attribution";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/Note"
 */
export class Note {
    @ApiProperty()
    subject?: string;

    @ApiProperty()
    text: string;

    @ApiProperty()
    attribution?: Attribution;
}
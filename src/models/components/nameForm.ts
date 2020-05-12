import { NamePart } from "./namePart";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/NameForm"
 */
export class NameForm {
    @ApiProperty()
    lang?: string;

    @ApiProperty()
    fullText?: string;

    @ApiProperty({ type: [NamePart] })
    parts?: NamePart[];
}
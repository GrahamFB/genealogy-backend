import { Conclusion } from "./conclusion";
import { NameType } from "../enums/nameType";
import { NameForm } from "./nameForm";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/Name"
 */
export class Name extends Conclusion {
    @ApiProperty()
    type?: NameType;

    @ApiProperty({ type: [NameForm] })
    nameForms: NameForm[];

    @ApiProperty()
    date?: Date;
}
import { Conclusion } from "./conclusion";
import { GenderType } from "../enums/genderType";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/Gender"
 */
export class Gender extends Conclusion {
    @ApiProperty({ enum: GenderType })
    type: GenderType;
}
import { Qualifier, QualifierEnum } from "./qualifier";
import { NamePartType } from "../enums/namePartType";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/NamePart"
 */
export class NamePart {
    @ApiProperty({ enum: NamePartType })
    type?: NamePartType;

    @ApiProperty()
    value: string;

    @ApiProperty({ enum: QualifierEnum })
    qualifier?: Qualifier;
}
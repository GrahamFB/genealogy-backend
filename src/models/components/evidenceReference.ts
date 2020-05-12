import { Attribution } from "./attribution";
import { URI } from "../aliases/URI";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/EvidenceReference"
 */
export class EvidenceReference {
    @ApiProperty({ type: String })
    resource: URI;

    @ApiProperty()
    attribution?: Attribution;
}
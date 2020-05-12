import { Conclusion } from "./conclusion";
import { EvidenceReference } from "./evidenceReference";
import { SourceReference } from "./sourceReference";
import { Identifier } from "./identifier";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/Subject"
 */
export class Subject extends Conclusion {
    @ApiProperty()
    extracted?: boolean;

    @ApiProperty({ type: [EvidenceReference] })
    evidence?: EvidenceReference[];

    @ApiProperty({ type: [SourceReference] })
    media?: SourceReference[];

    @ApiProperty({ type: [Identifier] })
    identifiers?: Identifier[];
}
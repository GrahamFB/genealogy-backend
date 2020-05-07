import { Conclusion } from "./conclusion";
import { EvidenceReference } from "./evidenceReference";
import { SourceReference } from "./sourceReference";
import { Identifier } from "./identifier";

/**
 * @$id "http://gedcomx.org/v1/Subject"
 */
export interface Subject extends Conclusion {
    extracted?: boolean;
    evidence?: EvidenceReference[];
    media?: SourceReference[];
    identifiers?: Identifier[];
}
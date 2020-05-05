import { Attribution } from "./attribution";
import { Qualifier } from "./qualifier";

/**
 * @$id "http://gedcomx.org/v1/SourceReference"
 */
export interface SourceReference {
    description: string;
    attribution?: Attribution;
    qualifiers?: Qualifier[];
}
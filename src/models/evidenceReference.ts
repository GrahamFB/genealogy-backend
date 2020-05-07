import { Attribution } from "./attribution";
import { URI } from "./aliases/URI";

/**
 * @$id "http://gedcomx.org/v1/EvidenceReference"
 */
export interface EvidenceReference {
    resource: URI;
    attribution?: Attribution;
}
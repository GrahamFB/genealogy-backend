import { ConfidenceLevel } from "./enums/confidenceLevel";
import { Attribution } from "./attribution";
import { SourceReference } from "./sourceReference";
import { Note } from "./note";

/**
 * @$id "http://gedcomx.org/v1/Conclusion"
 */
export interface Conclusion {
    confidence?: ConfidenceLevel;
    attribution?: Attribution;
    sources?: SourceReference[];
    notes?: Note[];
}
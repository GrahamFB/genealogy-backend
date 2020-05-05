import { Attribution } from "./attribution";

/**
 * @$id "http://gedcomx.org/v1/Note"
 */
export interface Note {
    subject?: string;
    text: string;
    attribution?: Attribution;
}
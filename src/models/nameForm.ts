import { NamePart } from "./namePart";

/**
 * @$id "http://gedcomx.org/v1/NameForm"
 */
export interface NameForm {
    lang?: string;
    fullText?: string;
    parts?: NamePart[];
}
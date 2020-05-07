import { Qualifier } from "./qualifier";
import { NamePartType } from "./enums/namePartType";

/**
 * @$id "http://gedcomx.org/v1/NamePart"
 */
export interface NamePart {
    type?: NamePartType;
    value: string;
    qualifier?: Qualifier;
}
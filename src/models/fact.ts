import { FactType } from "./enums/factType";
import { FactQualifier } from "./enums/factQualifier";
import { PlaceReference } from "./placeReference";

/**
 * @$id "http://gedcomx.org/v1/Fact"
 */
export interface Fact {
    type: FactType;
    date?: Date;
    place?: PlaceReference;
    value?: string;
    qualifiers?: FactQualifier[];
}
import { FactType } from "./enums/factType";
import { FactQualifier } from "./enums/factQualifier";
import { PlaceReference } from "./placeReference";
import { Conclusion } from "./conclusion";

/**
 * @$id "http://gedcomx.org/v1/Fact"
 */
export interface Fact extends Conclusion {
    type: FactType;
    date?: Date;
    place?: PlaceReference;
    value?: string;
    qualifiers?: FactQualifier[];
}
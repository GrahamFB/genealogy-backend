import { Conclusion } from "./conclusion";
import { GenderType } from "./enums/genderType";

/**
 * @$id "http://gedcomx.org/v1/Gender"
 */
export interface Gender extends Conclusion {
    type: GenderType;
}
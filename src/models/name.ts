import { Conclusion } from "./conclusion";
import { NameType } from "./enums/nameType";
import { NameForm } from "./nameForm";

/**
 * @$id "http://gedcomx.org/v1/Name"
 */
export interface Name extends Conclusion {
    type?: NameType;
    nameForms: NameForm[];
    date?: Date;
}
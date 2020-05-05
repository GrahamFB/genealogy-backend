import { Subject } from "./subject";
import { Gender } from "./gender";
import { Name } from "./name";
import { Fact } from "./fact";

/**
 * @$id "http://gedcomx.org/v1/Person"
 */
export interface Person extends Subject {
    private?: boolean;
    gender?: Gender;
    names?: Name[];
    facts?: Fact[];
}
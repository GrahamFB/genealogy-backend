import { Timestamp } from "./aliases/Timestamp";
import { URI } from "./aliases/URI";

/**
 * @$id "http://gedcomx.org/v1/Attribution"
 */
export interface Attribution {
    contributor?: URI;
    modified?: Timestamp;
    changeMessage?: string;
    creator?: URI;
    created?: Timestamp;
}
import { Timestamp } from "../aliases/Timestamp";
import { URI } from "../aliases/URI";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/Attribution"
 */
export class Attribution {
    @ApiProperty({ type: String })
    contributor?: URI;

    @ApiProperty({ type: Date })
    modified?: Timestamp;

    @ApiProperty()
    changeMessage?: string;

    @ApiProperty({ type: String })
    creator?: URI;
    
    @ApiProperty({ type: Date })
    created?: Timestamp;
}
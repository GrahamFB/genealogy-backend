import { Subject } from "../../models/components/subject";
import { Gender } from "../../models/components/gender";
import { Name } from "../../models/components/name";
import { Fact } from "../../models/components/fact";
import { ApiProperty } from "@nestjs/swagger";

/**
 * @$id "http://gedcomx.org/v1/Person"
 */
export class CreatePersonDto extends Subject {
    @ApiProperty()
    readonly private?: boolean;

    @ApiProperty()
    readonly gender?: Gender;

    @ApiProperty({ type: [Name] })
    readonly names?: Name[];

    @ApiProperty({ type: [Fact] })
    readonly facts?: Fact[];
}
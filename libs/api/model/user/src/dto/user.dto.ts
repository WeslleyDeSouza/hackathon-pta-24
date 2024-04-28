import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "../entities";

export class UserDtoResponse extends UserEntity {
    @ApiProperty()
    override userId: string;

    @ApiProperty()
    override firstName: string;

    @ApiProperty()
    override lastName: string;

    @ApiProperty()
    override email: string;
}
import { ApiProperty } from "@nestjs/swagger";
import { BadgeEntity } from "../entities";


export class BadgeDtoResponse extends BadgeEntity {
    @ApiProperty()
    override badgeId: string;

    @ApiProperty()
    override title: string;

    @ApiProperty()
    override description: string;

    @ApiProperty()
    override activityName: string;

    @ApiProperty()
    override tag: string;

    @ApiProperty()
    override activityValue: number | null;
}

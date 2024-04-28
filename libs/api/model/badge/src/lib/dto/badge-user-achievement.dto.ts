import { ViewColumn } from "typeorm"
import { BadgeUserAchievementViewEntity } from "../entities/badge-user-achievement.view";
import { ApiProperty } from "@nestjs/swagger";


export class BadgeUserAchievementDtoResponse extends BadgeUserAchievementViewEntity {
    @ApiProperty()
    override badgeId: string;

    @ApiProperty()
    override userId: string;

    @ApiProperty()
    override badgeTitle: string;

    @ApiProperty()
    override badgeDescription: string;

    @ApiProperty()
    override achieved: boolean;

    @ApiProperty()
    override activityName: string;

    @ApiProperty()
    override badgeTag: string;

    @ApiProperty()
    override activityValue: number | null;

    @ApiProperty()
    override activityProgress: number | null;
}

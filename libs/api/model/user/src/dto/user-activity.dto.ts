import { ApiProperty } from "@nestjs/swagger";

export class UserActivityDtoUpdate {
    @ApiProperty({ required: true })
    activityName: string;

    @ApiProperty({ required: true })
    activityProgress: number;
  }
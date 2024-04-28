import { ViewColumn, ViewEntity } from "typeorm"


@ViewEntity({
    expression: `
        SELECT
          badge.badgeId AS badgeId,
          user.userId AS userId,
          badge.title AS badgeTitle,
          badge.tag AS badgeTag,
          badge.description AS badgeDescription, IF(achievements.userId IS NOT NULL, 1, 0) AS achieved,
          badge.activityName as activityName, badge.activityValue AS activityValue,
          IF (user_activity.userId IS NOT NULL,
            json_extract(activities, CONCAT(json_unquote(json_search(json_extract(activities, '$[*].name'), 'one', badge.activityName)), '.progress')),
            NULL
          ) AS activityProgress
        FROM user
        CROSS JOIN badge
        LEFT JOIN user_badge_achievement achievements ON badge.badgeId = achievements.badgeId
        AND user.userId = achievements.userId
        LEFT JOIN user_activity ON user_activity.userId = user.userId
    `,
})
export class BadgeUserAchievementViewEntity {
    @ViewColumn()
    badgeId: string;

    @ViewColumn()
    userId: string;

    @ViewColumn()
    badgeTitle: string;

    @ViewColumn()
    badgeDescription: string;

    @ViewColumn({
      transformer: {
        to: (value: boolean) => "",
        from: (value: string) => value !== "0",
      }
    })
    achieved: boolean;

    @ViewColumn()
    activityName: string;

    @ViewColumn()
    badgeTag: string;

    @ViewColumn()
    activityValue: number | null;

    @ViewColumn()
    activityProgress: number | null;
}

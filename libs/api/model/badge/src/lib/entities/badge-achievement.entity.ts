import { ViewColumn, ViewEntity } from "typeorm"


@ViewEntity({
    expression: `
        SELECT badge.badgeId AS badgeId, user.userId AS userId, badge.title AS badgeTitle,
        badge.description AS badgeDescription, IF(achievements.userId IS NOT NULL, true, false) AS achieved,
        badge.activityName as activityName, badge.activityValue AS activityValue, 0 AS activityProgress
        FROM user
        CROSS JOIN badge
        LEFT JOIN user_badge_achievement achievements ON badge.badgeId = achievements.badgeId 
        AND user.userId = achievements.userId
    `,
})
export class BadgeAchievementEntity {
    @ViewColumn()
    badgeId: string;

    @ViewColumn()
    userId: string;

    @ViewColumn()
    badgeTitle: string;

    @ViewColumn()
    badgeDescription: string;

    @ViewColumn()
    achieved: boolean;

    @ViewColumn()
    activityName: string;

    @ViewColumn()
    activityValue: number | null;

    @ViewColumn()
    activityProgress: number | null;
}
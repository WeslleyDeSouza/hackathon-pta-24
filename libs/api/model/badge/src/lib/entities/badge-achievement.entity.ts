import { ViewColumn, ViewEntity } from "typeorm"


@ViewEntity({
    expression: `
        SELECT "post"."id" AS "id", "post"."name" AS "name", "category"."name" AS "categoryName"
        FROM "user" "user"
        CROSS JOIN "badge" "badge"
        LEFT JOIN "user_badge_achievement" "achievements" ON "badge"."badgeId" = "achievements"."badgeId" 
        AND "user"."userId" = "achievements"."userId"
    `,
})
export class BadgeAchievement {
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
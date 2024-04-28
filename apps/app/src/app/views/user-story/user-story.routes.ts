import { UserStoryResolver } from "./user-story/common";
import { UserStoryListComponent, UserStoryReviewComponent } from "./user-story/view";
import { Route, UrlSegment } from "@angular/router";
import { UserStoryFlowLayoutComponent } from "./user-story/view/flow/layout";

const isNumber = (value: string | number) => !isNaN(value as number);

export const userStoryRoutes: Route[] = [
  {
    path: "user-story",
    children: [
      {
        path: "flow",
        component: UserStoryFlowLayoutComponent,
        children: [
          {
            path: ":storyId/review/:reviewId",
            component: UserStoryReviewComponent,
            canMatch: [(route: Route, segments: UrlSegment[]) => isNumber(segments[0]?.path)],
          },
          {
            path: "",
            component: UserStoryReviewComponent,
          },
        ],
      },
      {
        path: ":storyId/review/:reviewId",
        component: UserStoryReviewComponent,
        canMatch: [(route: Route, segments: UrlSegment[]) => isNumber(segments[0]?.path)],
      },
      {
        path: "",
        component: UserStoryListComponent,
        resolve: { stories: UserStoryResolver },
        providers: [UserStoryResolver],
      },
    ],
  },
  {
    path: "",
    redirectTo: "user-story",
    pathMatch: "full",
  },
];

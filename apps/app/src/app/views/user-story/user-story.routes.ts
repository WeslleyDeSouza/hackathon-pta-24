import { UserStoryResolver } from "./user-story/common";
import { UserStoryListComponent, UserStoryReviewComponent } from "./user-story/view";
import { Route, UrlSegment } from "@angular/router";
import { UserStoryFlowLayoutComponent } from "./user-story/view/flow/layout";
import { UserStoryStore } from "./user-story/common/user-story.store";
import { UserStoryFlowDoneComponent } from "./user-story/view/flow/views/done/user-story-flow-done.component";

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
            path: ":storyId/review/:estimationId",
            component: UserStoryReviewComponent,
            canMatch: [(route: Route, segments: UrlSegment[]) => isNumber(segments[0]?.path)],
          },
          {
            path: ":storyId/done",
            component: UserStoryFlowDoneComponent,
            canMatch: [(route: Route, segments: UrlSegment[]) => isNumber(segments[0]?.path)],
          },
          {
            path: "",
            component: UserStoryReviewComponent,
          },
        ],
      },
      {
        path: ":storyId/review/:estimationId",
        component: UserStoryReviewComponent,
        canMatch: [(route: Route, segments: UrlSegment[]) => isNumber(segments[0]?.path)],
      },
      {
        path: "",
        component: UserStoryListComponent,
      },
    ],
    providers: [UserStoryStore, UserStoryResolver],
    resolve: { stories: UserStoryResolver },
  },
  {
    path: "",
    redirectTo: "user-story",
    pathMatch: "full",
  },
];

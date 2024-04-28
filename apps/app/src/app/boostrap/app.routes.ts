import { Route } from "@angular/router";

import { LayoutComponent } from "../layout/layout.component";
import { ProjectComponent } from "../views/project/project.component";
import { userStoryRoutes } from "../views/user-story/user-story.routes";

export const appRoutes: Route[] = [
  {
    path: "",
    redirectTo: "project",
    pathMatch: "full",
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "project",

        children: [
          {
            path: ":projectId",
            children: userStoryRoutes,
          },
          {
            path: "",
            loadComponent: () => ProjectComponent,
          },
        ],
      },
    ],
  },
];

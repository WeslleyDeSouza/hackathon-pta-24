import { Route } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ProjectComponent } from '../views/project/project.component';
import { UserStoryComponent } from '../views/user/user-story/user-story.component';
import { UserReviewComponent } from '../views/user/user-review/user-review.component';

export const appRoutes: Route[] = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'project',
        loadComponent:()=> ProjectComponent
      },
      {
        path:'user',
        children:[
          {
            path:'story',
            loadComponent:()=> UserStoryComponent
          },
          {
            path:'review',
            loadComponent:()=> UserReviewComponent
          }
        ]
      }
    ]
  },
  {
    path:'',
    redirectTo:'project',
    pathMatch:'prefix'
  }
];

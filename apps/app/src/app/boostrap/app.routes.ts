import { Route } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ProjectComponent } from '../views/project/project.component';
import { UserStoryComponent } from '../views/user/user-story/user-story.component';
import { UserReviewComponent } from '../views/user/user-review/user-review.component';
import { UserStoryResolver } from '../views/user/user-story/common';

export const appRoutes: Route[] = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'project',

        children:[
          {

            path: ':projectId',
            children:[
              {
                path:'user-story',
                loadComponent:()=> UserStoryComponent,
                resolve:{
                  stories:UserStoryResolver
                },
                providers:[UserStoryResolver],
                children:[
                  {
                    path:'review',
                    loadComponent:()=> UserReviewComponent
                  }
                ]
              },
            ]
          },
          {
            path:'',
            loadComponent:()=> ProjectComponent,
          },
        ]
      }
    ]
  },
  {
    path:'',
    redirectTo:'project',
    pathMatch:'full'
  }
];

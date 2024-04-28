import { Component, TemplateRef, inject } from '@angular/core';
import { PageBase } from '../../view.base';
import { ActivatedRoute } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { UserStoryDtoResponse, UserStoryService } from '@hackathon-pta/app/api';

const isStateOpenForReview = (item:UserStoryDtoResponse) => item.stateOpenForReview;

@Component({
  standalone: true,
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrl: './user-story.component.scss',
  imports: [
    NgForOf,
    NgIf
  ]
})
export class UserStoryComponent extends PageBase{

  route = inject(ActivatedRoute)


  constructor(protected api:UserStoryService) {
    super();
  }

  get stories():Array<UserStoryDtoResponse>{
      return this.route.snapshot.data['stories']
  }
  get storiesOpenForReview():Array<UserStoryDtoResponse>{
      return this.stories.filter( isStateOpenForReview )
  }


  override getData():void {
    console.log(this.stories[0]);
  }

  get hasAdminRight():boolean {
    return  true
  }

  onSetStateOpenForReview(userStory:UserStoryDtoResponse):void{
    this.api.userStorySetStateForReview(
      {
        projectId: userStory.projectId,
        userStoryId:  userStory.userStoryId,
        state: true
      }
    ).subscribe(()=> {
      userStory.stateOpenForReview = new Date() as any
    })
  }
}

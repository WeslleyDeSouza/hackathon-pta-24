import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageBase } from '../../view.base';
import { ActivatedRoute } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { UserStoryDtoResponse, UserStoryService } from '@hackathon-pta/app/api';

const isStateOpenForReview = (item:UserStoryDtoResponse) => item.stateOpenForReview;
const isStateReviewed = (item:UserStoryDtoResponse) => false

@Component({
  standalone: true,
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrl: './user-story.component.scss',
  imports: [
    NgForOf,
    NgIf
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserStoryComponent extends PageBase{

  route = inject(ActivatedRoute)

  states = {
    hasOpenStoriesForReview:false,
    hasOpenStoriesReviewed:false
  }


  constructor(protected api:UserStoryService) {
    super();
  }

  get hasStateOpenStoriesForReview():boolean{
    return  this.states.hasOpenStoriesForReview
  }

  get stories():Array<UserStoryDtoResponse>{
      return this.route.snapshot.data['stories']
  }
  get storiesOpenForReview():Array<UserStoryDtoResponse>{
    let stories = this.stories.filter( isStateOpenForReview );
    this.states.hasOpenStoriesForReview = !!stories.length
    return stories
  }

  get storiesReviewed():Array<UserStoryDtoResponse>{
    let stories = this.stories.filter( isStateReviewed );
    this.states.hasOpenStoriesReviewed = !!stories.length
    return stories
  }

  get hasAdminRight():boolean {
    return  true
  }

  override getData():void {
    console.log(this.stories[0]);
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

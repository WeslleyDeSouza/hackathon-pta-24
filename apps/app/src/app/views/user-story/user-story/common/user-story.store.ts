import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { UserStoryService, UserStoryWithReviewDtoResponse } from "@hackathon-pta/app/api";

const isStateOpenForReview = (item: UserStoryWithReviewDtoResponse) =>
  item.stateOpenForReview && !item.estimation?.["estimationValue"];
const isStateReviewed = (item: UserStoryWithReviewDtoResponse) =>
  !!item.estimation?.["estimationValue"];

const isStateNotReviewed = (item: UserStoryWithReviewDtoResponse) =>
  !item.estimation?.["estimationValue"];

@Injectable()
export class UserStoryStore {
  private stories$: BehaviorSubject<UserStoryWithReviewDtoResponse[]> = new BehaviorSubject<
    UserStoryWithReviewDtoResponse[]
  >([]);

  states = {
    hasOpenStoriesForReview: false,
    hasOpenStoriesReviewed: false,
  };

  set stories(stories) {
    this.stories$.next(stories);
  }

  get stories(): Array<UserStoryWithReviewDtoResponse> {
    return this.stories$.value;
  }

  get storiesOpenForReview(): Array<UserStoryWithReviewDtoResponse> {
    let stories = this.stories.filter(isStateOpenForReview);
    this.states.hasOpenStoriesForReview = !!stories.length;
    return stories;
  }
  get storiesReviewed(): Array<UserStoryWithReviewDtoResponse> {
    let stories = this.stories.filter(isStateReviewed);
    this.states.hasOpenStoriesReviewed = !!stories.length;
    return stories;
  }
  get storiesNotReviewed(): Array<UserStoryWithReviewDtoResponse> {
    return this.stories.filter(isStateNotReviewed);
  }
}

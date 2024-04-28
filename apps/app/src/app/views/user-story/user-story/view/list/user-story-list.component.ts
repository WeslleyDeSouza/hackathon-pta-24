import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { UserStoryService, UserStoryWithReviewDtoResponse } from "@hackathon-pta/app/api";
import { PageBase } from "../../../../view.base";

const isStateOpenForReview = (item: UserStoryWithReviewDtoResponse) =>
  item.stateOpenForReview && !item.estimation?.["estimationValue"];
const isStateReviewed = (item: UserStoryWithReviewDtoResponse) =>
  !!item.estimation?.["estimationValue"];

const isStateNotReviewed = (item: UserStoryWithReviewDtoResponse) =>
  !item.estimation?.["estimationValue"];

@Component({
  standalone: true,
  selector: "app-user-story-list",
  templateUrl: "./user-story-list.component.html",
  styleUrl: "./user-story-list.component.scss",
  imports: [NgForOf, NgIf, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryListComponent extends PageBase {
  route = inject(ActivatedRoute);

  states = {
    hasOpenStoriesForReview: false,
    hasOpenStoriesReviewed: false,
  };

  constructor(protected api: UserStoryService, protected cdr: ChangeDetectorRef) {
    super();
  }

  get hasStateOpenStoriesForReview(): boolean {
    return this.states.hasOpenStoriesForReview;
  }

  get stories(): Array<UserStoryWithReviewDtoResponse> {
    return this.route.snapshot.data["stories"];
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

  get hasAdminRight(): boolean {
    return true;
  }

  override getData(): void {
    console.log(this.stories[0]);
  }

  onSetStateOpenForReview(userStory: UserStoryWithReviewDtoResponse): void {
    this.api
      .userStorySetStateForReview({
        projectId: userStory.projectId,
        userStoryId: userStory.userStoryId,
        state: true,
      })
      .subscribe(() => {
        userStory.stateOpenForReview = new Date() as any;
        this.updateView();
      });
  }

  updateView(): void {
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }
}

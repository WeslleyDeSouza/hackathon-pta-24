import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { UserStoryService, UserStoryWithReviewDtoResponse } from "@hackathon-pta/app/api";
import { PageBase } from "../../../../view.base";
import { UserStoryStore } from "../../common/user-story.store";

@Component({
  standalone: true,
  selector: "app-user-story-list",
  templateUrl: "./user-story-list.component.html",
  styleUrl: "./user-story-list.component.scss",
  imports: [NgForOf, NgIf, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryListComponent extends PageBase implements AfterViewInit {
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor(
    public store: UserStoryStore,
    protected api: UserStoryService,
    protected cdr: ChangeDetectorRef
  ) {
    super();
    this.store.stories = this.route.snapshot.data["stories"];
  }

  ngAfterViewInit(): void {
    this.updateView();
  }

  get estimationId() {
    return this.route.snapshot.data?.["estimationId"];
  }

  get hasStateOpenStoriesForReview(): boolean {
    return this.store.states.hasOpenStoriesForReview;
  }

  get hasAdminRight(): boolean {
    return true;
  }

  override getData(): void {}

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

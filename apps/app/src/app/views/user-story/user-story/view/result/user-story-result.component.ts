import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  inject,
} from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { PageBase } from "../../../../view.base";
import { UserStoryService, UserStoryWithReviewDtoResponse } from "@hackathon-pta/app/api";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserStoryStore } from "../../common/user-story.store";

@Component({
  standalone: true,
  selector: "app-user-story-review-result",
  templateUrl: "./user-story-review.component.html",
  styleUrl: "./user-story-review.component.scss",
  imports: [NgForOf, NgIf, RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryResultComponent extends PageBase {
  route = inject(ActivatedRoute);
  router = inject(Router);
  currentStory: UserStoryWithReviewDtoResponse | undefined;

  summary: any = [];

  constructor(
    protected cdr: ChangeDetectorRef,
    public store: UserStoryStore,
    protected userStoryService: UserStoryService
  ) {
    super();
  }

  get routeParams() {
    return this.route.snapshot.params;
  }
  get projectId() {
    return this.routeParams["projectId"] || this.route.parent?.snapshot?.params["projectId"];
  }
  get estimationId() {
    return this.routeParams["estimationId"];
  }
  get storyId() {
    return this.routeParams["storyId"];
  }

  get summaryAvg() {
    const total = this.summary.reduce((acc, item) => acc + item.estimateValue, 0);
    return Math.round(total / this.summary.length);
  }

  calculateDiff(estimateValue) {
    const average = this.summaryAvg;
    const difference = estimateValue - average;
    return difference;
  }

  verifyData(): boolean {
    if (this.store.stories.length == 0) {
      this.store.stories = this.route.parent?.snapshot.data["stories"];
    }

    if (isNaN(this.projectId)) {
      console.warn("Project Id is not valid");
      this.router.navigate(["/"]);
      return false;
    }

    return true;
  }

  override getData() {
    this.verifyData();

    this.userStoryService
      .userStoryGetEstimationSummary({
        projectId: this.projectId,
        storyId: this.storyId,
      })
      .subscribe((data: any) => {
        if (typeof data === "string") data = JSON.parse(data);
        this.summary = data || [];
        this.updateView();
        console.log(this.summary);
      });

    this.currentStory = this.store.stories.find(
      item => (item.projectId = this.projectId && item.userStoryId == this.storyId)
    );

    this.updateView();
  }

  updateView() {
    this.cdr.markForCheck();
  }
}

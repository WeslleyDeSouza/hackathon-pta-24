import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { PageBase } from "../../../../view.base";
import { UserStoryService } from "@hackathon-pta/app/api";

@Component({
  standalone: true,
  selector: "app-user-story-review",
  templateUrl: "./user-story-review.component.html",
  styleUrl: "./user-story-review.component.scss",
  imports: [NgForOf, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryReviewComponent extends PageBase {
  route = inject(ActivatedRoute);

  constructor(protected userStoryService: UserStoryService) {
    super();
  }

  get routeParams() {
    return this.route.snapshot.params;
  }
  get projectId() {
    return this.routeParams["projectId"];
  }
  get reviewId() {
    return this.routeParams["reviewId"];
  }
  get storyId() {
    return this.routeParams["storyId"];
  }

  onReviewValueChange(estimationValue: number) {
    const { projectId, reviewId, storyId } = this.routeParams;
    this.userStoryService
      .userStorySetEstimation({
        projectId,
        reviewId,
        storyId,
        value: estimationValue,
      })
      .subscribe();
  }

  override getData() {}
}

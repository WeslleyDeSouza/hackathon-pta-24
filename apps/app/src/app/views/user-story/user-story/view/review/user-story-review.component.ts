import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { PageBase } from "../../../../view.base";
import { UserStoryService } from "@hackathon-pta/app/api";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  standalone: true,
  selector: "app-user-story-review",
  templateUrl: "./user-story-review.component.html",
  styleUrl: "./user-story-review.component.scss",
  imports: [NgForOf, NgIf, RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryReviewComponent extends PageBase {
  route = inject(ActivatedRoute);

  showNavButton = true;

  formControl = new FormControl("", [Validators.required]);

  constructor(protected userStoryService: UserStoryService) {
    super();
  }

  get routeParams() {
    return this.route.snapshot.params;
  }
  get projectId() {
    return this.routeParams["projectId"];
  }
  get estimationId() {
    return this.routeParams["estimationId"];
  }
  get storyId() {
    return this.routeParams["storyId"];
  }

  onReviewValueChange(estimationValue: number) {
    const { projectId, estimationId, storyId } = this.routeParams;
    this.userStoryService
      .userStorySetEstimation({
        projectId,
        estimationId,
        storyId,
        value: estimationValue,
      })
      .subscribe();
  }

  override getData() {
    if (this.estimationId) {
      this.userStoryService
        .userStoryGetEstimation({
          estimationId: this.estimationId,
          projectId: this.projectId,
          storyId: this.storyId,
        })
        .subscribe((value: number) => {
          this.formControl.setValue(value + "");
        });
    }
  }
}

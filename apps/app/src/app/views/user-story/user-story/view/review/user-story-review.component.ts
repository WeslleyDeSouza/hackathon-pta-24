import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { PageBase } from "../../../../view.base";
import { UserStoryService, UserStoryWithReviewDtoResponse } from "@hackathon-pta/app/api";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserStoryStore } from "../../common/user-story.store";

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

  currentStory: UserStoryWithReviewDtoResponse | undefined;

  selections = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 5,
    },
    {
      value: 8,
    },
    {
      value: 13,
    },
    {
      value: 21,
    },
    {
      value: 34,
    },
    { value: 55 },
  ];

  constructor(
    protected cdr: ChangeDetectorRef,
    public store: UserStoryStore,
    protected userStoryService: UserStoryService
  ) {
    super();
    // todo add debounce
    this.route.params.subscribe(change => {
      this.getData();
      this.updateView();
    });
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

  onSelectionClick({ value }): void {
    this.formControl.setValue(value);
    this.onReviewValueChange(value);
  }

  onReviewValueChange(estimationValue: number) {
    this.userStoryService
      .userStorySetEstimation({
        projectId: this.projectId,
        estimationId: this.estimationId,
        storyId: this.storyId,
        value: estimationValue,
      })
      .subscribe();
  }

  verifyData(): boolean {
    if (this.store.stories.length == 0) {
      this.store.stories = this.route.parent?.snapshot.data["stories"];
    }
    return true;
  }

  override getData() {
    this.verifyData();

    this.formControl.reset();

    if (!isNaN(this.estimationId)) {
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

    this.currentStory = this.store.stories.find(
      item => (item.projectId = this.projectId && item.userStoryId == this.storyId)
    );
  }

  updateView() {
    this.cdr.markForCheck();
  }
}

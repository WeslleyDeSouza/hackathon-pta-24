import { Component, TemplateRef, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { PageBase } from "../../../../../view.base";
import { UserStoryFlowSidenavComponent } from "../component/sidenav/user-story-flow--sidenav.component";
import { UserStoryStore } from "../../../common/user-story.store";
import { UserActivityService } from "@hackathon-pta/app/api";
import { ToastService } from "apps/app/src/app/common/toast.service";
import { AchievementToastComponent } from "apps/app/src/app/achievement-toast/achievement-toast.component";

@Component({
  standalone: true,
  selector: "app-user-story-flow-layout",
  templateUrl: "./user-story-flow-layout.component.html",
  styleUrl: "./user-story-flow-layout.component.scss",
  imports: [RouterOutlet, AchievementToastComponent, UserStoryFlowSidenavComponent],
})
export class UserStoryFlowLayoutComponent extends PageBase {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  userStoryStore: UserStoryStore = inject(UserStoryStore);
  userActivityService: UserActivityService = inject(UserActivityService);
  toastService = inject(ToastService);
  reviewValue = 0;

  index: number = 0;

  constructor() {
    super();
  }

  get userStoryId(): string {
    return (
      this.route.snapshot.params["storyId"] || this.route.snapshot.firstChild?.params["storyId"]
    );
  }
  get projectId(): string {
    if (this.route.snapshot.params["projectId"]) return this.route.snapshot.params["projectId"];

    return this.route.snapshot.firstChild?.params["projectId"];
  }
  get estimationId(): string {
    return (
      this.route.snapshot.params["estimationId"] ||
      this.route.snapshot.firstChild?.params["estimationId"]
    );
  }

  verifyData(): boolean {
    if (this.userStoryStore.stories.length == 0) {
      this.userStoryStore.stories = this.route.parent?.snapshot.data["stories"];
      if (this.userStoryStore.stories.length == 0) {
        this.router.navigate(["../../"]);
        return false;
      }
    }
    return true;
  }

  onReviewValueChangedHandler(value: number) {
    this.reviewValue = value;
  }

  override getData() {
    if (!this.verifyData()) return;

    const { projectId, estimationId } = this.route.snapshot.params;
    if (!estimationId) {
      this.navigateToNext();
    }
  }

  onNext(): void {
    this.userActivityService.userActivityUpdateUserStory({
      body: {
        activityName: 'estimation_hours',
        activityProgress: this.reviewValue
      }}).subscribe(x => x.forEach(e => this.toastService.show(e)));
    this.reviewValue = 0;
    this.userActivityService.userActivityUpdateUserStory({
      body: {
        activityName: 'estimation',
        activityProgress: 1
      }}).subscribe(x => x.forEach(e => this.toastService.show(e)));
      
    this.index++;
    this.navigateToNext();
  }

  navigateToNext(): void {
    let projectId: string | number = this.projectId;
    let userStoryId: string | number = this.userStoryId;
    let estimationId: string | number = this.estimationId;

    const review = this.userStoryStore.storiesOpenForReview[this.index];

    if (!review) {
      this.router.url.includes("done")
        ? this.router.navigate([`/project/${projectId}/user-story`])
        : this.router.navigate([`/project/${projectId}/user-story/flow/${userStoryId}/done`]);
      return;
    }

    projectId = review.projectId ? review.projectId : projectId;
    userStoryId = review.userStoryId;
    estimationId = review.estimation?.["estimationId"];

    if (isNaN(projectId as number) || isNaN(userStoryId as number)) {
      console.warn("Validation error ");
      console.warn(projectId);
      console.warn(userStoryId);
      return;
    }

    this.router.navigate([
      `/project/${projectId}/user-story/flow/${userStoryId}/review/${estimationId || "new"}`,
    ]);
  }
}

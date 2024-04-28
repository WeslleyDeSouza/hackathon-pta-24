import { Component, TemplateRef, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { PageBase } from "../../../../../view.base";
import { UserStoryFlowSidenavComponent } from "../component/sidenav/user-story-flow--sidenav.component";
import { UserStoryStore } from "../../../common/user-story.store";

@Component({
  standalone: true,
  selector: "app-user-story-flow-layout",
  templateUrl: "./user-story-flow-layout.component.html",
  styleUrl: "./user-story-flow-layout.component.scss",
  imports: [RouterOutlet, UserStoryFlowSidenavComponent],
})
export class UserStoryFlowLayoutComponent extends PageBase {
  route = inject(ActivatedRoute);
  router = inject(Router);
  userStoryStore = inject(UserStoryStore);

  constructor() {
    super();
  }

  override getData() {
    if (this.userStoryStore.stories.length == 0) {
      this.router.navigate(["../../"]);
    }

    const { projectId, estimationId } = this.route.snapshot.params;
    console.log(projectId);
    if (!estimationId) {
      this.onNext();
    }
  }

  onNext() {
    let { projectId, userStoryId, estimationId } = this.route.snapshot.params;

    if (!projectId || !userStoryId) {
      const review = this.userStoryStore.storiesOpenForReview[0];

      projectId = review.projectId;
      userStoryId = review.userStoryId;
      estimationId = review.estimation?.["estimationId"];
    }

    this.router.navigate([`./${userStoryId}/review/${estimationId || "new"}`]);
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  inject,
} from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import {
  UserDtoResponse,
  UserService,
  UserStoryService,
  UserStoryWithReviewDtoResponse,
} from "@hackathon-pta/app/api";
import { PageBase } from "../../../../view.base";
import { UserStoryStore } from "../../common/user-story.store";
import { ModalDismissReasons, NgbModal, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject } from "rxjs";
import { UserModalComponentComponent } from "../../../../../_component/user-modal/user-modal.component";

@Component({
  standalone: true,
  selector: "app-user-story-list",
  templateUrl: "./user-story-list.component.html",
  styleUrl: "./user-story-list.component.scss",
  imports: [NgForOf, NgIf, RouterLink, NgbRatingModule, UserModalComponentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryListComponent extends PageBase implements AfterViewInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  userService = inject(UserService);
  clickedUser$ = new BehaviorSubject<UserDtoResponse>({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  closeResult: string;
  private modalService = inject(NgbModal);
  completionPercent = 0;

  constructor(
    public store: UserStoryStore,
    protected api: UserStoryService,
    protected cdr: ChangeDetectorRef
  ) {
    super();

    if (this.store.stories.length == 0) this.store.stories = this.route.snapshot.data["stories"];
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

  override getData(force = false): void {
    const { projectId } = this.route.snapshot.params;
    this.api
      .userStoryGetCompletionPercentage({
        projectId: projectId,
      })
      .subscribe(x => {
        this.completionPercent = Math.round((x.result + Number.EPSILON) * 100) / 100;
        this.updateView();
      });

    if (force)
      this.api
        .userStoryListByProjectId({
          projectId,
          withEstimation: true,
        })
        .subscribe(data => (this.store.stories = data));
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

  onUserSelectClick(userId: string, content: TemplateRef<any>) {
    this.userService
      .userGetUser({
        id: userId,
      })
      .subscribe(u => {
        this.clickedUser$.next(u);
        this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" }).result.then(
          result => {
            this.closeResult = `Closed with: ${result}`;
          },
          reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
      });
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return "by pressing ESC";
      case ModalDismissReasons.BACKDROP_CLICK:
        return "by clicking on a backdrop";
      default:
        return `with: ${reason}`;
    }
  }
}

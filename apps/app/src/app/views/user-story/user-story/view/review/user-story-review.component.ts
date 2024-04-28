import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { PageBase } from "../../../../view.base";
import { UserStoryService, UserStoryWithReviewDtoResponse } from "@hackathon-pta/app/api";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserStoryStore } from "../../common/user-story.store";
import { UserStoryFlowFlipCardComponent } from "./component/flip-card/user-story-flow-flip-card.component";
import { BypassHtmlSanitizerPipe } from "./common/user-story-review.pipe";

const svg = `<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.875 44C13.829 44 4.875 35.046 4.875 24C4.875 12.954 13.829 4 24.875 4C35.921 4 44.875 12.954 44.875 24C44.875 35.046 35.921 44 24.875 44ZM24.875 40C29.1185 40 33.1881 38.3143 36.1887 35.3137C39.1893 32.3131 40.875 28.2435 40.875 24C40.875 19.7565 39.1893 15.6869 36.1887 12.6863C33.1881 9.68571 29.1185 8 24.875 8C20.6315 8 16.5619 9.68571 13.5613 12.6863C10.5607 15.6869 8.875 19.7565 8.875 24C8.875 28.2435 10.5607 32.3131 13.5613 35.3137C16.5619 38.3143 20.6315 40 24.875 40V40ZM17.035 30.788C16.9315 30.5464 16.8766 30.2867 16.8735 30.0239C16.8704 29.761 16.919 29.5002 17.0167 29.2561C17.1144 29.0121 17.2592 28.7897 17.4428 28.6016C17.6265 28.4135 17.8454 28.2635 18.087 28.16C18.3286 28.0565 18.5883 28.0016 18.8511 27.9985C19.114 27.9954 19.3748 28.044 19.6189 28.1417C19.8629 28.2394 20.0853 28.3842 20.2734 28.5678C20.4615 28.7515 20.6115 28.9704 20.715 29.212C21.0646 30.0254 21.645 30.7184 22.3844 31.2054C23.1237 31.6924 23.9897 31.9519 24.875 31.9519C25.7603 31.9519 26.6263 31.6924 27.3656 31.2054C28.105 30.7184 28.6854 30.0254 29.035 29.212C29.1385 28.9704 29.2885 28.7515 29.4766 28.5678C29.6647 28.3842 29.8871 28.2394 30.1311 28.1417C30.3752 28.044 30.636 27.9954 30.8989 27.9985C31.1617 28.0016 31.4214 28.0565 31.663 28.16C31.9046 28.2635 32.1235 28.4135 32.3072 28.6016C32.4908 28.7897 32.6356 29.0121 32.7333 29.2561C32.831 29.5002 32.8796 29.761 32.8765 30.0239C32.8734 30.2867 32.8185 30.5464 32.715 30.788C32.058 32.3229 30.9649 33.6312 29.5712 34.5507C28.1775 35.4701 26.5446 35.9602 24.875 35.9602C23.2054 35.9602 21.5725 35.4701 20.1788 34.5507C18.7851 33.6312 17.692 32.3229 17.035 30.788V30.788ZM18.875 16C19.4054 16 19.9141 16.2107 20.2892 16.5858C20.6643 16.9609 20.875 17.4696 20.875 18V22C20.875 22.5304 20.6643 23.0391 20.2892 23.4142C19.9141 23.7893 19.4054 24 18.875 24C18.3446 24 17.8359 23.7893 17.4608 23.4142C17.0857 23.0391 16.875 22.5304 16.875 22V18C16.875 17.4696 17.0857 16.9609 17.4608 16.5858C17.8359 16.2107 18.3446 16 18.875 16V16ZM30.875 16C31.4054 16 31.9141 16.2107 32.2892 16.5858C32.6643 16.9609 32.875 17.4696 32.875 18V22C32.875 22.5304 32.6643 23.0391 32.2892 23.4142C31.9141 23.7893 31.4054 24 30.875 24C30.3446 24 29.8359 23.7893 29.4608 23.4142C29.0857 23.0391 28.875 22.5304 28.875 22V18C28.875 17.4696 29.0857 16.9609 29.4608 16.5858C29.8359 16.2107 30.3446 16 30.875 16V16Z" fill="#C1C7CD"/>
</svg>
`;

const svg2 = `
<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.891 17.768L24.315 37.954L35.551 18.294C32.891 18.084 30.127 17.388 27.067 16.31C26.277 16.03 25.871 15.968 25.507 16.014C25.199 16.054 22.061 17.152 20.221 17.618C17.899 18.206 15.453 18.252 12.891 17.768V17.768ZM10.071 12.788C13.475 14.128 16.519 14.428 19.239 13.74C20.715 13.366 24.195 12.148 25.005 12.046C26.063 11.912 27.065 12.066 28.397 12.536C31.945 13.788 34.989 14.448 37.803 14.354L39.577 11.25C34.7749 9.09637 29.5698 7.98853 24.307 8C19.0928 7.98898 13.9348 9.0766 9.16895 11.192L10.071 12.786V12.788ZM5.45895 8.536C11.2889 5.53964 17.7521 3.9842 24.307 4C31.031 4 37.519 5.6 43.299 8.612C43.5376 8.73641 43.7488 8.90772 43.9197 9.11567C44.0906 9.32362 44.2178 9.56393 44.2936 9.8222C44.3694 10.0805 44.3923 10.3514 44.3609 10.6187C44.3295 10.8861 44.2445 11.1443 44.111 11.378L26.043 42.992C25.8675 43.2984 25.6141 43.553 25.3084 43.7297C25.0028 43.9065 24.6557 43.9992 24.3026 43.9984C23.9495 43.9976 23.6029 43.9033 23.2981 43.7251C22.9932 43.5469 22.741 43.2912 22.567 42.984L4.63495 11.3C4.5028 11.0658 4.41921 10.8074 4.3892 10.5402C4.35919 10.273 4.38337 10.0025 4.46029 9.74485C4.53721 9.4872 4.6653 9.24771 4.83689 9.04069C5.00848 8.83367 5.22005 8.66338 5.45895 8.54V8.536ZM20.375 24C19.8445 24 19.3358 23.7893 18.9607 23.4142C18.5857 23.0391 18.375 22.5304 18.375 22C18.375 21.4696 18.5857 20.9609 18.9607 20.5858C19.3358 20.2107 19.8445 20 20.375 20C20.9054 20 21.4141 20.2107 21.7892 20.5858C22.1642 20.9609 22.375 21.4696 22.375 22C22.375 22.5304 22.1642 23.0391 21.7892 23.4142C21.4141 23.7893 20.9054 24 20.375 24V24ZM26.375 30C25.8445 30 25.3358 29.7893 24.9607 29.4142C24.5857 29.0391 24.375 28.5304 24.375 28C24.375 27.4696 24.5857 26.9609 24.9607 26.5858C25.3358 26.2107 25.8445 26 26.375 26C26.9054 26 27.4141 26.2107 27.7892 26.5858C28.1642 26.9609 28.375 27.4696 28.375 28C28.375 28.5304 28.1642 29.0391 27.7892 29.4142C27.4141 29.7893 26.9054 30 26.375 30Z" fill="#C1C7CD"/>
</svg>
`;

@Component({
  standalone: true,
  selector: "app-user-story-review",
  templateUrl: "./user-story-review.component.html",
  styleUrl: "./user-story-review.component.scss",
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    UserStoryFlowFlipCardComponent,
    BypassHtmlSanitizerPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryReviewComponent extends PageBase {
  @Output()
  reviewValueChanged = new EventEmitter<number>();
  route = inject(ActivatedRoute);

  showNavButton = true;

  formControl = new FormControl("", [Validators.required]);

  currentStory: UserStoryWithReviewDtoResponse | undefined;

  selections = [
    {
      svg: svg,
      value: 1,
      duration: "Some Hours",
      description: "Peregrine falcon",
    },
    {
      svg: svg,
      value: 2,
      duration: "Half Day",
      description: "Golden eagle",
    },
    {
      svg: svg,
      value: 3,
      duration: "Full Day",
      description: "Leopard",
    },
    {
      svg: svg,
      value: 5,
      duration: "Two/Three Days",
      description: "Swordfish",
    },
    {
      svg: svg2,
      value: 8,
      duration: "Some Days",
      description: "Bird",
    },
    {
      svg: svg,
      value: 13,
      duration: "Week",
      description: "Goldfish",
    },
    {
      svg: svg,
      value: 21,
      duration: "Weeks",
      description: "Chicken",
    },
    {
      svg: svg2,
      value: 34,
      duration: "Half Month",
      description: "Snail",
    },
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
      .subscribe(x => this.reviewValueChanged.emit(estimationValue));
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

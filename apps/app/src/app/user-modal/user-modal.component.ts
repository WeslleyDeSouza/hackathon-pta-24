import { Component, Input, OnInit, TemplateRef, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalDismissReasons, NgbModal, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { BadgeService, UserDtoResponse, UserService } from "@hackathon-pta/app/api";
import { BadgeUserAchievementDtoResponse } from "@hackathon-pta/app/api";
import { BadgeModalComponent } from "../badge-modal/badge-modal.component";
import { BehaviorSubject } from "rxjs";
import { UserStore } from "../common/user.store";

interface BadgeGroupedList {
  badgeId: string;
  user1: {
    achieved: boolean;
    badgeTag: string;
  };
  user2: {
    achieved: boolean;
    badgeTag: string;
  };
}

@Component({
  selector: "app-user-modal-component",
  standalone: true,
  imports: [CommonModule, NgbNavModule, BadgeModalComponent],
  templateUrl: "./user-modal.component.html",
  styleUrl: "./user-modal.component.css",
})
export class UserModalComponentComponent implements OnInit {
  user: BehaviorSubject<UserDtoResponse> = new BehaviorSubject<UserDtoResponse>({
    userId: "DUMMY-1-1-2",
    lastName: "Meier",
    firstName: "Hans",
    email: "hans.meier@pta.ch",
  });

  active = 1;
  selectedBadge: BadgeUserAchievementDtoResponse;

  currentUser: UserDtoResponse;
  badgeListAchieved: BadgeUserAchievementDtoResponse[];
  badgeListNotAchieved: BadgeUserAchievementDtoResponse[];
  badgeGroupedList: BadgeGroupedList[];
  private modalService = inject(NgbModal);
  closeResult = "";

  constructor(
    private readonly badgeService: BadgeService,
    private readonly userStore: UserStore
  ) {}

  ngOnInit() {
    this.badgeService.badgeListByUserId({ userId: this.user.getValue().userId }).subscribe(x => {
      this.badgeListAchieved = x.filter(x => x.achieved);
      this.badgeListNotAchieved = x.filter(x => !x.achieved);
    });
    this.currentUser = this.userStore.data$.getValue();
    if (this.currentUser.userId !== this.user.getValue().userId) {
      this.badgeService.badgeListByUserId({ userId: this.currentUser.userId }).subscribe(x => {
        this.badgeGroupedList = x
          .filter(e => e.achieved)
          .concat(this.badgeListAchieved)
          .reduce((result: BadgeGroupedList[], currentValue: BadgeUserAchievementDtoResponse) => {
            const existing = result.find(r => r.badgeId === currentValue.badgeId);
            if (existing === undefined) {
              result.push({
                badgeId: currentValue.badgeId,
                user1: {
                  achieved:
                    currentValue.userId === this.user.getValue().userId && currentValue.achieved,
                  badgeTag: currentValue.badgeTag,
                },
                user2: {
                  achieved:
                    currentValue.userId === this.currentUser.userId && currentValue.achieved,
                  badgeTag: currentValue.badgeTag,
                },
              });
            } else {
              if (currentValue.userId === this.user.getValue().userId) {
                existing.user1.achieved = currentValue.achieved;
              } else {
                existing.user2.achieved = currentValue.achieved;
              }
            }
            return result;
          }, []);
      });
    }
  }

  open(badge: BadgeUserAchievementDtoResponse, content: TemplateRef<any>) {
    this.selectedBadge = badge;

    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  additionalStyle(badge: BadgeUserAchievementDtoResponse): string {
    const value = 1 - (badge.activityProgress ?? 0) / badge.activityValue;
    return this.grayScaleStyleString(value);
  }

  grayScaleStyleString(value = 1): string {
    return `filter: grayscale(${value});`;
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

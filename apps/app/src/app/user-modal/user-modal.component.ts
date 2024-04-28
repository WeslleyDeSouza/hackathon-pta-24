import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbNavModule, NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";
import { BadgeService, BadgeUserAchievementDtoResponse } from "@hackathon-pta/app/api";
import { Observable, map } from "rxjs";

@Component({
  selector: "app-user-modal-component",
  standalone: true,
  imports: [CommonModule, NgbNavModule, NgbProgressbarModule],
  templateUrl: "./user-modal.component.html",
  styleUrl: "./user-modal.component.css",
})
export class UserModalComponentComponent implements OnInit {
  active = 1;
  userId = "DUMMY-1-1-1";

  badgeListAchieved$: Observable<BadgeUserAchievementDtoResponse[]>;
  badgeListNotAchieved$: Observable<BadgeUserAchievementDtoResponse[]>;

  constructor(private readonly badgeService: BadgeService) {}

  ngOnInit() {
    this.badgeListAchieved$ = this.badgeService
      .badgeListByUserId({ id: this.userId })
      .pipe(map(x => x.filter(b => b.achieved)));
    this.badgeListNotAchieved$ = this.badgeService
      .badgeListByUserId({ id: this.userId })
      .pipe(map(x => x.filter(b => !b.achieved)));
  }
}

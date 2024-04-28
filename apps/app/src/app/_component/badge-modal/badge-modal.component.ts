import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadgeUserAchievementDtoResponse } from "@hackathon-pta/app/api";
import { NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-badge-modal",
  standalone: true,
  imports: [CommonModule, NgbProgressbarModule],
  templateUrl: "./badge-modal.component.html",
  styleUrl: "./badge-modal.component.css",
})
export class BadgeModalComponent {
  @Input() badge: BadgeUserAchievementDtoResponse;

  additionalStyle(): string {
    const value = 1-(this.badge.activityProgress / this.badge.activityValue);
    return !this.badge.achieved ? `filter: grayscale(${value});` : '';
  }
}

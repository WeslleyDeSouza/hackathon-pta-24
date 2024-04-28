import { Component, OnInit, TemplateRef, ViewChild, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastAchievementStore } from "../common/toast-achievement.store";
import { ToastService } from "../common/toast.service";
import { BadgeDtoResponse } from "@hackathon-pta/app/api";
import { delay } from "rxjs";

@Component({
  selector: "app-achievement-toast",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./achievement-toast.component.html",
  styleUrl: "./achievement-toast.component.css",
})
export class AchievementToastComponent implements OnInit {
  @ViewChild('ngbToastHeader') toastTemplate: TemplateRef<any>;
  toastAchievementStore = inject(ToastAchievementStore);
  toastService = inject(ToastService);
  currentBadgeAchievement: BadgeDtoResponse | null = null;

  ngOnInit() {
    this.toastAchievementStore.data$.subscribe(x => {
      x.forEach(b => {
        this.currentBadgeAchievement = b;
        this.toastService.show({
          template: this.toastTemplate
      });
        delay(500);
      })
    })
  }
}

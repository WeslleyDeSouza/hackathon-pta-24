import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastService } from "../../_common/toast.service";
import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-achievement-toast",
  standalone: true,
  imports: [CommonModule, NgbToastModule],
  template: `
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1200">
      @for (toast of toastService.toasts; track toast) {
      <ngb-toast [autohide]="true" [delay]="5000" (hidden)="toastService.remove(toast)">
        <strong>{{ toast.title }}</strong>
        <div style="display: flex">
          <img
            style="height: 48px; width: 48px; margin-right: 12px;margin-left:8px;"
            src="assets/{{ toast.tag }}.png" />
          <p>{{ toast.description }}</p>
        </div>
      </ngb-toast>
      }
      <div></div>
    </div>
  `,
})
export class AchievementToastComponent {
  toastService = inject(ToastService);
}

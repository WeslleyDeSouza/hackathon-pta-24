import { ChangeDetectionStrategy, Component, HostListener, inject, Input } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { PageBase } from "../../../../../../view.base";

@Component({
  standalone: true,
  selector: "app-review-flip-card",
  templateUrl: "./user-story-flow-flip-card.component.html",
  styleUrl: "./user-story-flip-card.component.scss",
  imports: [NgForOf, NgIf, RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryFlowFlipCardComponent extends PageBase {
  @HostListener("click", ["$event.target"])
  onClickHandler(btn) {
    if (this.flipByClick) this.doFlip();
  }

  @HostListener("document:keydown", ["$event"])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.altKey && event.code == "KeyR") this.doFlip();
  }
  @Input() flip = false;
  flipByClick = true;
  constructor() {
    super();
  }

  override getData() {}

  doFlip() {
    this.flip = !this.flip;
  }
}

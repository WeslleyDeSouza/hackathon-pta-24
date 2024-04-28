import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { UserStoryService } from "@hackathon-pta/app/api";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { PageBase } from '../../../../../../view.base';

@Component({
  standalone: true,
  selector: "app-user-story-review-flow",
  templateUrl: "./user-story-flow-done.component.html",
  styleUrl: "./user-story-flow-done.component.scss",
  imports: [NgForOf, NgIf, RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryFlowDoneComponent extends PageBase {
  constructor() {
    super();
  }

  override getData() {}
}

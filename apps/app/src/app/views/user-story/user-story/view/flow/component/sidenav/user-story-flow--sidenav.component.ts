import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { PageBase } from "../../../../../../view.base";

@Component({
  standalone: true,
  selector: "app-user-story-flow--sidenav",
  templateUrl: "./user-story-flow--sidenav.component.html",
  styleUrl: "./user-story-flow--sidenav.component.scss",
  imports: [NgForOf, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryFlowSidenavComponent extends PageBase {
  route = inject(ActivatedRoute);

  override getData() {}
}

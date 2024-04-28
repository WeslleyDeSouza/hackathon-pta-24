import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { PageBase } from "../../../../view.base";
import { UserStoryFlowSidenavComponent } from "./component/sidenav/user-story-flow--sidenav.component";

@Component({
  standalone: true,
  selector: "app-user-story-flow",
  templateUrl: "./user-story-flow.component.html",
  styleUrl: "./user-story-flow.component.scss",
  imports: [NgForOf, NgIf, UserStoryFlowSidenavComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoryFlowComponent extends PageBase {
  route = inject(ActivatedRoute);

  override getData() {}
}

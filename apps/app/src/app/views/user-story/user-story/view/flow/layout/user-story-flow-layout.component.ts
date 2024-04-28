import { Component, TemplateRef, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PageBase } from "../../../../../view.base";
import { UserStoryFlowSidenavComponent } from "../component/sidenav/user-story-flow--sidenav.component";

@Component({
  standalone: true,
  selector: "app-user-story-flow-layout",
  templateUrl: "./user-story-flow-layout.component.html",
  styleUrl: "./user-story-flow-layout.component.scss",
  imports: [RouterOutlet, UserStoryFlowSidenavComponent],
})
export class UserStoryFlowLayoutComponent extends PageBase {
  override getData() {}
}

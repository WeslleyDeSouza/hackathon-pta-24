import { Component, TemplateRef, inject } from "@angular/core";
import { PageBase } from "../../view.base";

@Component({
  standalone: true,
  selector: "app-user-review",
  templateUrl: "./user-review.component.html",
  styleUrl: "./user-review.component.scss",
  imports: [],
})
export class UserReviewComponent extends PageBase {
  override getData() {}
}

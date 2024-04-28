import { Component, TemplateRef, inject } from "@angular/core";
import { AsyncPipe, NgForOf } from "@angular/common";
import { PageBase } from "../view.base";
import { BehaviorSubject } from "rxjs";
import { ProjectDtoResponse } from "@hackathon-pta/app/api";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  imports: [NgForOf, AsyncPipe, RouterLink],
  providers: [],
})
export class HomeComponent extends PageBase {
  constructor() {
    super();
  }

  override getData() {}
}

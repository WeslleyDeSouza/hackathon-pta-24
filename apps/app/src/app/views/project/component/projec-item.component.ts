import { Component, TemplateRef, inject, Input, Output, EventEmitter } from "@angular/core";

import { BehaviorSubject } from "rxjs";
import { ProjectDtoResponse } from "@hackathon-pta/app/api";
import { AsyncPipe, NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-project-item",
  template: `
    <div
      class="card shadow-sm border-0 cursor-pointer w-100"
      routerLink="/project/{{ project.projectId }}/user-story">
      <div class="card-body">
        <h5 class="card-title">
          {{ project.title }}
        </h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        </p>
      </div>
    </div>
  `,
  imports: [NgForOf, AsyncPipe, RouterLink],
  providers: [],
})
export class ProjectItemComponent {
  @Input({ required: true }) project: ProjectDtoResponse;

  @Output() delete: EventEmitter<boolean> = new EventEmitter();

  @Output() edit: EventEmitter<boolean> = new EventEmitter();

  onDelete(): void {
    this.delete.emit(true);
  }
  onEdit(): void {
    this.edit.emit(true);
  }
}

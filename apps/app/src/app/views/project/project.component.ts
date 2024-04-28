import { Component, TemplateRef, inject } from '@angular/core';
import { ProjectApi } from './common/project.api';
import { AsyncPipe, NgForOf } from '@angular/common';
import { PageBase } from '../view.base';
import { ProjectStore } from './common/project.store';
import { BehaviorSubject } from 'rxjs';
import { ProjectDtoResponse } from '@hackathon-pta/app/api';
import { ProjectItemComponent } from './component/projec-item.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrl: "./project.component.scss",
  imports: [NgForOf, AsyncPipe, ProjectItemComponent, RouterLink],
  providers: [ProjectApi, ProjectStore],
})
export class ProjectComponent extends PageBase {
  constructor(protected api: ProjectApi, protected store: ProjectStore) {
    super();
  }

  get projects$(): BehaviorSubject<ProjectDtoResponse[]> {
    return this.store.data$;
  }

  getData() {
    this.onLoadAndSetData(this.api.list(), this.store.projects$);
  }
}

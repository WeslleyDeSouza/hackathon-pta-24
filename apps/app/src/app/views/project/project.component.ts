import { Component, TemplateRef, inject } from '@angular/core';
import { ProjectApi } from './common/project.api';
import { AsyncPipe, NgForOf } from '@angular/common';
import { PageBase } from '../view.base';
import { ProjectStore } from './common/project.store';

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  imports: [
    NgForOf,
    AsyncPipe
  ],
  providers:[ProjectApi,ProjectStore]
})
export class ProjectComponent extends PageBase{

  get projects$(){
    return this.store.projects$
  }

  constructor(protected api:ProjectApi,protected store:ProjectStore) {
    super()
  }

  getData(){
    this.onLoadAndSetData(
      this.api.list(),
      this.store.projects$
    )
  }
}

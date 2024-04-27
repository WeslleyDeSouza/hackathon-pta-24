import { Component, TemplateRef, inject } from '@angular/core';
import { ProjectApi } from './common/project.api';
import { NgForOf } from '@angular/common';
import { PageBase } from '../view.base';

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  imports: [
    NgForOf
  ],
  providers:[ProjectApi]
})
export class ProjectComponent extends PageBase{

  projects = [
    {},
    {},
    {},
  ]

  constructor(api:ProjectApi) {
    super()
  }
}

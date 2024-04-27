import { Component, TemplateRef, inject } from '@angular/core';
import { ProjectApi } from './common/project.api';

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './app.component.scss',
  imports: [],
  providers:[ProjectApi]
})
export class ProjectComponent {

  constructor(api:ProjectApi) {
  }
}

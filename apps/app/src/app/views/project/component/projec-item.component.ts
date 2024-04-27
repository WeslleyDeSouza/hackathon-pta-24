import { Component, TemplateRef, inject, Input, Output, EventEmitter } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { ProjectDtoResponse } from '@hackathon-pta/app/api';
import { AsyncPipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-project-item',
  template:`
    <div class="card w-100" >
      <a routerLink="/project/{{project.projectId}}/user-story">
        <div class="card-body">
          <h5 class="card-title">
            {{project.title}}
          </h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </a>

    </div>
  `,
  imports: [
    NgForOf,
    AsyncPipe,
    RouterLink
  ],
  providers:[ ]
})
export class ProjectItemComponent {
  @Input({required:true})project:ProjectDtoResponse

  @Output() delete:EventEmitter<boolean> = new EventEmitter();

  @Output() edit:EventEmitter<boolean> = new EventEmitter();

  onDelete():void{
    this.delete.emit(true)
  }
  onEdit():void{
    this.edit.emit(true)
  }
}

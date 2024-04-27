import { Component, TemplateRef, inject } from '@angular/core';
import { PageBase } from '../../view.base';
import { ActivatedRoute } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrl: './user-story.component.scss',
  imports: [
    NgForOf
  ]
})
export class UserStoryComponent extends PageBase{

  route = inject(ActivatedRoute)
  constructor() {
    super();
  }

  get stories(){
      return this.route.snapshot.data['stories']
  }
  override getData():void {
    console.log(this.stories);
  }
}

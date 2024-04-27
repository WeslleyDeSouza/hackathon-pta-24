import { Component, TemplateRef, inject } from '@angular/core';
import { PageBase } from '../../view.base';

@Component({
  standalone: true,
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrl: './user-story.component.scss',
  imports: [],
})
export class UserStoryComponent extends PageBase{
  override getData() {
  }
}

import { Component, TemplateRef, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [  RouterModule],
  template: '<router-outlet/>',
  selector: 'app-root',
})
export class AppComponent {

}

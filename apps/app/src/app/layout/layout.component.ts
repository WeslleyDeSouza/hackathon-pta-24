import { Component, TemplateRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserModalComponentComponent } from '../user-modal/user-modal.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStore } from '../common/user.store';
import { BehaviorSubject } from 'rxjs';
import { UserDtoResponse } from '@hackathon-pta/app/api';
import { AchievementToastComponent } from '../achievement-toast/achievement-toast.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [
    RouterOutlet,
    UserModalComponentComponent,
    AchievementToastComponent
  ]
})
export class LayoutComponent {
  title = 'app';

  private modalService = inject(NgbModal);
  closeResult = '';

  constructor(private readonly userStore: UserStore){}

  get currentUser$(): BehaviorSubject<UserDtoResponse> {
    return this.userStore.data$;
  }

  open(content: TemplateRef<any>) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}

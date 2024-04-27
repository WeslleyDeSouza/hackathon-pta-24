import { Component, TemplateRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserModalComponentComponent } from '../user-modal/user-modal.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [
    RouterOutlet,
    UserModalComponentComponent
  ]
})
export class LayoutComponent {
  title = 'app';

  private modalService = inject(NgbModal);
  closeResult = '';

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

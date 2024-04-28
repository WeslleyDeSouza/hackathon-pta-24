import { Component, TemplateRef, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UserModalComponentComponent } from "../_component/user-modal/user-modal.component";
import {
  ModalDismissReasons,
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { UserStore } from "../_common/user.store";
import { BehaviorSubject } from "rxjs";
import { UserDtoResponse, UserService } from "@hackathon-pta/app/api";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { GlobalDataEmitter } from "../_common/gde.emitter";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  standalone: true,
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
  imports: [
    RouterOutlet,
    UserModalComponentComponent,
    AsyncPipe,
    NgIf,
    NgForOf,
    NgbDropdownButtonItem,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbDropdown,
  ],
})
export class LayoutComponent {
  title = "app";

  private modalService = inject(NgbModal);

  closeResult = "";

  users: any[] = [];

  constructor(
    protected gde: GlobalDataEmitter,
    public readonly userService: UserService,
    private readonly userStore: UserStore
  ) {
    this.userService.userGetUsers().subscribe((u: any[]) => (this.users = u.slice(0, 10)));

    this.gde.reload$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.loadCurrentUser();
    });

    this.loadCurrentUser();
  }

  loadCurrentUser() {
    this.userService.userGetCurrentUser().subscribe(u => {
      this.userStore.user$.next(u);
    });
  }

  get currentUser$(): BehaviorSubject<UserDtoResponse | undefined> {
    return this.userStore.data$;
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return "by pressing ESC";
      case ModalDismissReasons.BACKDROP_CLICK:
        return "by clicking on a backdrop";
      default:
        return `with: ${reason}`;
    }
  }
  switchUser(userId: string) {
    this.userService.userSwitchUser({ userId: userId }).subscribe(() => {
      setTimeout(() => this.gde.emitReload());
    });
  }
}

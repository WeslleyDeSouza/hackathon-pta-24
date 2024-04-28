import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDismissReasons, NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BadgeService } from '@hackathon-pta/app/api';
import { Observable, map } from 'rxjs';
import { BadgeUserAchievementDtoResponse } from '@hackathon-pta/app/api';
import { BadgeModalComponent } from '../badge-modal/badge-modal.component';

@Component({
  selector: 'app-user-modal-component',
  standalone: true,
  imports: [CommonModule, NgbNavModule, BadgeModalComponent],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css',
})
export class UserModalComponentComponent implements OnInit {
	active = 1;
  userId = "DUMMY-1-1-1";
  selectedBadge: BadgeUserAchievementDtoResponse;
  
  badgeListAchieved$: Observable<BadgeUserAchievementDtoResponse[]>;
  badgeListNotAchieved$: Observable<BadgeUserAchievementDtoResponse[]>;
  private modalService = inject(NgbModal);
  closeResult = '';


  constructor(private readonly badgeService: BadgeService){}

  ngOnInit() {
    this.badgeListAchieved$ = this.badgeService.badgeListByUserId({id: this.userId, achieved: true }).pipe(
      map(x => x.filter(b => b.achieved))
    );
    this.badgeListNotAchieved$ = this.badgeService.badgeListByUserId({id: this.userId, achieved: false }).pipe(
      map(x => x.filter(b => !b.achieved))
    );
  }

  open(badge: BadgeUserAchievementDtoResponse, content: TemplateRef<any>) {
    this.selectedBadge = badge;
    
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  additionalStyle(badge: BadgeUserAchievementDtoResponse): string {
    const value = 1-(badge.activityProgress / badge.activityValue);
    return `filter: grayscale(${value});`;
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

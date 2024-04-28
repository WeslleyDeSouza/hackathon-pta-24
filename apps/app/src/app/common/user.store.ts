import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDtoResponse, UserService } from '@hackathon-pta/app/api';


@Injectable({ providedIn: 'root' })
export class UserStore{
 readonly user$:BehaviorSubject<UserDtoResponse> = new BehaviorSubject<UserDtoResponse>({
  userId: "",
  lastName: "",
  firstName: "",
  email: ""
 });

  constructor(private readonly userService: UserService) {
    this.login();
  }

  get data$():BehaviorSubject<UserDtoResponse>{
   return this.user$
  }

  login() {
    this.userService.userGetCurrentUser().subscribe(u => this.user$.next(u));
  }
}

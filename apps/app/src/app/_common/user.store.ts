import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserDtoResponse, UserService } from "@hackathon-pta/app/api";

@Injectable({ providedIn: "root" })
export class UserStore {
  readonly user$: BehaviorSubject<UserDtoResponse | undefined> = new BehaviorSubject<
    UserDtoResponse | undefined
  >(undefined);

  constructor() {}

  get data$(): BehaviorSubject<UserDtoResponse | undefined> {
    return this.user$;
  }
}

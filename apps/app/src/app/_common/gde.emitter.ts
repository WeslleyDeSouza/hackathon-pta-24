import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserDtoResponse, UserService } from "@hackathon-pta/app/api";

@Injectable({ providedIn: "root" })
export class GlobalDataEmitter {
  protected readonly _reload$: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  get reload$(): Observable<boolean> {
    return this._reload$.asObservable();
  }

  emitReload() {
    this._reload$.emit(true);
  }
}

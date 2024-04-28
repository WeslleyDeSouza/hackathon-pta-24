import { Component, inject } from "@angular/core";
import { first, Observable, Subject } from "rxjs";
import { GlobalDataEmitter } from "../_common/gde.emitter";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({ template: "" })
export abstract class PageBase {
  private gde: GlobalDataEmitter = inject(GlobalDataEmitter);

  constructor() {
    this.init();
  }

  private init() {
    setTimeout(() => this.getData(), 10);
    this.gde.reload$.pipe(takeUntilDestroyed()).subscribe(() => this.getData(true));
  }

  protected onLoadAndSetData<T>(
    api$: Observable<T>,
    subject: Subject<any>,
    cb: any = null,
    done: any = null
  ): void {
    api$.pipe(first()).subscribe((data: any) => {
      subject.next(cb ? cb(data) : data);
      done ? done(data) : null;
    });
  }

  protected onLoadAndCb<T>(api$: Observable<T>, cb: any = () => null): void {
    api$.pipe(first()).subscribe(cb);
  }

  abstract getData(force?: boolean): void;
}

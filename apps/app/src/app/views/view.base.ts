import { Component } from '@angular/core';
import { first, Observable, Subject } from 'rxjs';

@Component({template:''})
export abstract class PageBase{

  constructor() {
   this.init()
  }

  private init(){
    setTimeout(()=> this.getData(),10)
  }

  protected onLoadAndSetData<T>(api$: Observable<T>, subject: Subject<any>, cb: any = null, done: any = null): void {
    api$.pipe(first()).subscribe((data: any) => {
      subject.next(cb ? cb(data) : data);
      done ? done(data) : null;
    });
  }

  protected onLoadAndCb<T>(api$: Observable<T>, cb: any = () => null): void {
    api$.pipe(first()).subscribe(cb);
  }

  abstract getData():void

}

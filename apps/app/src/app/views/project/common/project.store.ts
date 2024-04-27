import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ProjectStore{
 readonly projects$ = new BehaviorSubject([])
}

import { Injectable } from '@angular/core';
import { BadgeDtoResponse } from '@hackathon-pta/app/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastAchievementStore {
	badgeAchievements$ = new BehaviorSubject<BadgeDtoResponse[]>([]);

	get data$() {
		return this.badgeAchievements$;
	}

	add(achievements: BadgeDtoResponse[]) {
		this.data$.next(achievements);
	}
}
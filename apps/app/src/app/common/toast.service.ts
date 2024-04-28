import { Injectable, TemplateRef } from '@angular/core';
import { BadgeDtoResponse } from '@hackathon-pta/app/api';

@Injectable({ providedIn: 'root' })
export class ToastService {
	toasts: BadgeDtoResponse[] = [];

	show(toast: BadgeDtoResponse) {
		this.toasts.push(toast);
	}

	remove(toast: BadgeDtoResponse) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
import { InjectionToken } from '@angular/core';

export interface IEnvironment {
  apiUrl:string
}

export const TOKEN_ENV = new InjectionToken<string>('ENV');

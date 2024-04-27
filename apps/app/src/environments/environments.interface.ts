import { InjectionToken } from '@angular/core';

export interface IEnvironment {
  api:string
}

export const TOKEN_ENV = new InjectionToken<string>('ENV');

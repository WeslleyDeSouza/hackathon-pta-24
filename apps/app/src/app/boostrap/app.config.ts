import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { environment } from '../../environments/environments';
import { TOKEN_ENV } from '../../environments/environments.interface';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),{provide:TOKEN_ENV,useValue:environment}],
};

/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent ,appConfig} from './app/boostrap';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

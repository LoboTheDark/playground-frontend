import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import packageJson from '../package.json';
import {AppComponent} from './app/layout/app/app.component';

if (packageJson.version) {
  console.log(`🌟 Frontend version: ${packageJson.version}`);
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

import { Routes } from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {HobbiesComponent} from './pages/hobbies/hobbies.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'hobbies', component: HobbiesComponent},
];


import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home | Portfolio',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home | Portfolio',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | Portfolio'
  },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Resume | Portfolio'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects | Portfolio',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 - Page Not Found',
  },
];

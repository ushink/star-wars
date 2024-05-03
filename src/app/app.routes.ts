import { Routes } from '@angular/router';
import { StarListComponent } from './star-list/star-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/liststar', pathMatch: 'full' },
  { path: 'liststar', component: StarListComponent, title: 'List Star' },
];

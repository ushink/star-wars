import { Routes } from '@angular/router';
import { StarListComponent } from './star-list/star-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  { path: 'planets', component: StarListComponent, title: 'List Star' },
];

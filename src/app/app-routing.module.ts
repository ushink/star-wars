import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarListComponent } from './star-list/star-list.component';
import { StarDetailComponent } from './star-detail/star-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  { path: 'planets', component: StarListComponent, title: 'List Star' },
  { path: 'planet/:id', component: StarDetailComponent, title: 'Details' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

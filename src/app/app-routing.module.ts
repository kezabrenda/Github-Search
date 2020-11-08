import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitSearchComponent } from './git-search/git-search.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  { path: 'gitSearch', component: GitSearchComponent},
  { path: 'routing', component: RoutingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { GitSearchComponent } from './git-search/git-search.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  //{ path: 'gitSearch', component: GitSearchComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

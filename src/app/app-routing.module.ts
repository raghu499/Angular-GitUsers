import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserRepoListComponent } from './components/user-repo-list/user-repo-list.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { GraphDataComponent } from './components/graph-data/graph-data.component';

const routes: Routes = [
  {
    path: '',
    component: UserRepoListComponent
  },
  {
    path: 'repos/:name',
    component: UserRepoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './users/user-detail.component';
import {UserAddComponent} from './users/user-add.component';
import {UserUpdateComponent} from './users/user-update.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'update/:id', component: UserUpdateComponent},
  {path: 'users', component: UsersComponent},
  {path: 'portfolio', component: PortfoliosComponent},
  {path: 'add', component: UserAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PortfoliosComponent } from './portfolios/portfolios.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
	{
		path: 'users',
		loadChildren: './users/users.module#UsersModule'
	},
	{ path: 'portfolio', component: PortfoliosComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

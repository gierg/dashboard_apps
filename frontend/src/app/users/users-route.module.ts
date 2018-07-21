import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users.component';
import { UserAddComponent } from './components/user-add.component';

const routes: Routes = [
	{ path: '', redirectTo: '/users/list', pathMatch: 'full' },
	{
		path: 'list',
		children: [
			{ path: '', component: UsersComponent },
			{ path: 'add', component: UserAddComponent }
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {}

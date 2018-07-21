import { UsersComponent } from './components/users.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '../../../node_modules/@angular/http';

import { UserAddComponent } from './components/user-add.component';
import { UserUpdateComponent } from './components/user-update.component';
import { UserDetailComponent } from './components/user-detail.component';
import { UserService } from './user.service';

import { UsersRoutingModule } from './users-route.module';

@NgModule({
	declarations: [
		UserAddComponent,
		UserDetailComponent,
		UserUpdateComponent,
		UsersComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		UsersRoutingModule
	],
	exports: [
		UserAddComponent,
		UserDetailComponent,
		UserUpdateComponent,
		UsersComponent
	],
	providers: [
		UserService
	],
})
export class UsersModule {}
import {Component, OnInit, Input} from '@angular/core';
import {UserService} from './../user.service';
import { User } from './../../shared/models/user';
import {Router} from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./../../app.component.css']
})

export class UsersComponent implements OnInit {

	users: User[];

	constructor(private router: Router, private userService: UserService) { }

	/**
	 * Gets the existing users
	 */
	getUsers(): void {
		this.userService.getUsers().then(users => {
			this.users = users;
		});
	}

	ngOnInit(): void {
		this.getUsers();
	}

	update(id: string): void {
		this.router.navigate(['./update', id]);
	}

	remove(id: string): void {
		this.userService.remove(id).then(() => {
			this.getUsers();
		});
	}

	viewDetail(id: string): void {
		this.router.navigate(['./detail', id]);
	}
}

import { switchMap } from 'rxjs/operators';
import {Component} from '@angular/core';
import {User} from './../../shared/models/user';
import {Router} from '@angular/router';
import {UserService} from './../user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
	selector: 'app-user',
	templateUrl: './user-add.component.html',
	styleUrls: ['./../../app.component.css']
})

export class UserAddComponent {
	userAddForm: FormGroup;
	user = new User();

	constructor(
		private userService: UserService,
		private router: Router,
		private location: Location,
		private formBuilder: FormBuilder) {
		this.buildForm();
	};

	buildForm(): void {
		this.userAddForm = this.formBuilder.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
		mobileNumber: ['', Validators.required],
	});
}

	add(): void {
		const user = this.userAddForm.value as User;
		this.userService.add(user).then(response => {
			console.log('response: ', response);
			this.router.navigate(['/users']);
		});
	}

	goBack(): void {
		this.location.back();
	}
}

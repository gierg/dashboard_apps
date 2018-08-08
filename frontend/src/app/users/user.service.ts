import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { User } from './../shared/models/user';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UserService {

	private host = window.location.hostname;
	private apiAuth = 'f99aecef3d12e02dcbb6260bbdd35189c89e6e73';
	private headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8', 'api_auth_key': this.apiAuth });
	private usersURL = `http://${this.host}/dashboard_apps/v1`;

	constructor(private http: Http) { };

	/**
	 * Return all users
	 * @returns {Promise<User[]>}
	 */
	// getUsers(): Promise<User[]> {
	// 	return this.http.get(this.usersURL, {headers: this.headers}).toPromise().then(response => {
	// 		return response.json() as User[];
	// 	}).catch(this.handleError);
	// }
	getUsers(): Promise<User[]> {
		return this.http.get(this.usersURL, {headers: this.headers})
			.toPromise()
			.then(response => {
				console.log('response: ', response);
				return response.json() as User[];
			}).catch(this.handleError);
	}

	/**
	 * Returns user based on id
	 * @param id:string
	 * @returns {Promise<User>}
	 */
	getUser(id: string): Promise<User> {
		const url = `${this.usersURL}/index/${id}`;
		return this.http.get(url, { headers: this.headers }).toPromise().then(response => response.json() as User).catch(this.handleError);
	}

	/**
	 * Adds new user
	 * @param user:User
	 * @returns {Promise<User>}
	 */
	add(user: User): Promise<User> {
		const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8', 'api_auth_key': this.apiAuth });
		return this.http.post(`${this.usersURL}`, JSON.stringify(user), { headers: this.headers })
			.toPromise()
			.then(response => response.json() as User)
			.catch(this.handleError);
	}

	/**
	 * Updates user that matches to id
	 * @param user:User
	 * @returns {Promise<User>}
	 */
	update(user: User): Promise<User> {
		const headers = new Headers({ 'Content-Type': 'multipart/form-data; boundary=something', 'api_auth_key': this.apiAuth });
		return this.http.put(this.usersURL + '/single', JSON.stringify(user), { headers: headers })
			.toPromise()
			.then(response => response.json() as User)
			.catch(this.handleError);
	}

	/**
	 * Removes user
	 * @param id:string
	 * @returns {Promise<User>}
	 */
	remove(id: string): Promise<any> {
		const data = JSON.stringify({ _id: id, delete: 1 });
		return this.http.post(this.usersURL, data, { headers: this.headers })
			.toPromise()
			.then(response => console.log(response))
			.catch(this.handleError);
	}

	/**
	 * Handles error thrown during HTTP call
	 * @param error:any
	 * @returns {Promise<never>}
	 */
	private handleError(error: any): Promise<any> {
		alert(error.statusText); // for demo purposes only
		return Promise.reject(error.message.toString() || error.toString());
	}
}

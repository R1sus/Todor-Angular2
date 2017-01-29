import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{
    isLoggedIn: boolean;
    token: string;

    constructor(private http: Http) {}

    login(obj: User) {
        const body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        let promise = new Promise(resolve => {
            this.http.post('http://104.196.125.63:9000/api/signin', body, { headers: headers })
                .subscribe(
                    resp => {
                        let token = resp.json() && resp.json().token;
                        if (token) {
                            this.token = token;
                            localStorage.setItem('currentUser', JSON.stringify({username: obj.name, token: token}));
                            resolve(true);
                        }
                    },
                    err => alert("Error")
                );
        });

        return promise
                .then(response => {
                    if (response) {
                        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
                        this.http.post('http://104.196.125.63:9000/api/sendtoken', currentUser, { headers: headers })
                            .subscribe(data => {
                                if (data.success) {
                                    this.isLoggedIn = true;
                                    return this.isLoggedIn;
                                }
                            });
                    }
                })
    }

    logout() {
        this.isLoggedIn = false;
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}


/**
 * Created by D on 20.01.2017.
 */

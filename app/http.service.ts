import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers } from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{
    private loggedIn = false;

    constructor(private http: Http){
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    postData(obj: User){
        const body = JSON.stringify(obj);

        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post('http://104.196.125.63:9000/api/signin', body, { headers: headers })
            .map((resp:Response) => resp.json())
            .map((resp) => {
                if (resp.success) {
                    localStorage.setItem('auth_token', resp.token);
                    this.loggedIn = true;
                }

                return resp.success;
            })
            .catch((error:any) => {return Observable.throw(error);});
    }
}


/**
 * Created by D on 20.01.2017.
 */

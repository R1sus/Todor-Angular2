import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { AddUser } from './adduser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpAddUserService {

	constructor(private http: Http) { }

	postData(obj: AddUser) {
		const body = JSON.stringify(obj);

		let headers = new Headers({'Content-Type': 'application/json' });

		return this.http.post('http://104.196.125.63:9000/api/adduser', body, { headers: headers })
            .map((resp:Response)=>resp.json())
            .catch((error:any) =>{return Observable.throw(error);});

	}
}
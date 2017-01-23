import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  constructor(private http: Http) {}

  getProfile() {

    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let authToken = JSON.parse(localStorage.getItem('auth_token'));
    

    return this.http.post('http://104.196.125.63:9000/api/sendtoken', authToken, { headers: headers })
            .map((resp:Response)=>resp.json())
            .catch((error:any) =>{return Observable.throw(error);});
  }
}
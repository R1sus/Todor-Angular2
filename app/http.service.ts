import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{

    constructor(private http: Http){ }

    //http://localhost:8080/angular/setUser.php     PHP
    //http://localhost:51576/api/values/    Web API
    //http://localhost:56473/Home/PostData  ASP NET MVC

    postData(obj: User){
        const body = JSON.stringify(obj);

        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post(' http://104.196.125.63:9000/api/signin', body, { headers: headers })
            .map((resp:Response)=>resp.json())
            .catch((error:any) =>{return Observable.throw(error);});
    }
}


/**
 * Created by D on 20.01.2017.
 */

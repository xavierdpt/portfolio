import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

const foos = ['foo','bar','baz'];
let num=foos.length-1;

@Injectable()
export class FooService {

    constructor(private _http:Http) {
    }

    getAFoo() : string {
        num=(num+1)%foos.length
        return foos[num];
    }

    getDatabaseServerName() : Observable<string> {
        return this._http.get("http://localhost:4201/portfolio/dbname").map(
            (response:Response)=><string>response.json()
        ).catch(this.handleError);
    }

    handleError(error:Response) {
        return Observable.throw(error);
    }
}
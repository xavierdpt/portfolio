import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/Observable/throw';

const foos = ['foo','bar','baz'];
let num=foos.length-1;

export interface IFooService {
    getAFoo():string;
    getDatabaseServerName() : Observable<string|{}>;
}

@Injectable()
export class FooService implements IFooService {

    constructor(private _http:Http) {
    }

    getAFoo() : string {
        num=(num+1)%foos.length
        return foos[num];
    }

    getDatabaseServerName() : Observable<string|{}> {
        return this._http.get("http://localhost:4201/portfolio/dbname").map(
            (response:Response)=><string>response.json()
        ).catch(this.handleError);
    }

    handleError(error:Response) : ErrorObservable {
        return Observable.throw(error);
    }

    getDatabaseServerName2() :  Promise<string|void> {
        return this._http.get("http://localhost:4201/portfolio/dbname").map(
            (response:Response)=><string>response.json()
        ).toPromise().catch(this.handleError2);
    }

    handleError2(error:Response) : void {
        throw(error);
    }

    callDatabaseServerName2() : void {
        this.getDatabaseServerName2().then(
            (str)=>{
                console.log(str);
            }
        ).catch(error=>{
            console.log(error);
        });
    }
}
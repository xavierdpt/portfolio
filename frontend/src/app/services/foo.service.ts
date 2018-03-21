import {Injectable} from '@angular/core';


const foos = ['foo','bar','baz'];
let num=foos.length-1;

@Injectable()
export class FooService {
    getAFoo() : string {
        num=(num+1)%foos.length
        return foos[num];
    }
}
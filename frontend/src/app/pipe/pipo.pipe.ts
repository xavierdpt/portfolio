import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'pipo'
})
export class PipoPipe implements PipeTransform {
    transform(value:string) : string {
        let r:string = '';
        for(let i=0;i<value.length;++i) {
            r+='pipo'[i%'pipo'.length];
        }
        return r;
    }
}
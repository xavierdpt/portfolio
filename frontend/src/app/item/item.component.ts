import {Component} from '@angular/core'

@Component({
    selector:'item',
    templateUrl:'./item.component.html',
    styleUrls:['./item.component.css']
})
export class Item {
    texts : any[];
    constructor() {
        this.texts  = [{id:'foo'},{id:'bar'},{id:'baz'}];
    }
    double() : void {
        let len : number = this.texts.length;
        let newtexts = [];
        for(let i : number = len-1 ; i >= 0 ; --i) {
            newtexts.push({id:this.texts[i].id});
        }
        for(let i : number = 0 ; i < len ; ++i) {
            newtexts.push({id:this.texts[i].id+" "+i});
        }
        this.texts=newtexts;
        console.log(newtexts);
    }
    tracky(index:number, text:any):string {
        return text.id;
    }
}
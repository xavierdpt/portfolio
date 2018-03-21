import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {FooService} from '../services/foo.service';

@Component({
    selector: 'lifecycle',
    templateUrl: './lifecycle.component.html',
    providers:[FooService]
})
export class Lifecycle implements OnChanges, OnInit {

    
    @Input()
    text:string='hello';

    @Input()
    otherText:string='yu?';

    afoo:string;

    constructor(private _fooService : FooService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(JSON.stringify({id:'ngOnChanges',payload:changes}));
    }

    ngOnInit(): void {
        console.log(JSON.stringify({id:'ngOnInit'}));
        this.afoo=this._fooService.getAFoo();
    }
}
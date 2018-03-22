import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {FooService} from '../services/foo.service';
import 'rxjs/add/Observable/throw';

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

    dbname:string;

    message:string = "Loading data ...";

    constructor(private _fooService : FooService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(JSON.stringify({id:'ngOnChanges',payload:changes}));
    }

    ngOnInit(): void {
        console.log(JSON.stringify({id:'ngOnInit'}));
        this.afoo=this._fooService.getAFoo();
        this._fooService.getDatabaseServerName().subscribe(
            dbname=>{
                this.dbname=dbname;
                this.message=null;
            },
            error=>{
                this.message="Problem with the service. Please try again or call our support center.";
            }
        )
    }
}
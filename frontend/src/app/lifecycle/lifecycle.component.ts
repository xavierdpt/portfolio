import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {FooService} from '../services/foo.service';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { ISubscription} from 'rxjs/Subscription';

@Component({
    selector: 'lifecycle',
    templateUrl: './lifecycle.component.html'
})
export class Lifecycle implements OnChanges, OnInit {

    
    @Input()
    text:string='hello';

    @Input()
    otherText:string='yu?';

    afoo:string;

    dbname:string|{};

    message:string = "Loading data ...";

    subscription : ISubscription = null;

    constructor(private _fooService : FooService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(JSON.stringify({id:'ngOnChanges',payload:changes}));
    }

    ngOnInit(): void {
        console.log(JSON.stringify({id:'ngOnInit'}));
        this.afoo=this._fooService.getAFoo();
        this.subscription = this._fooService.getDatabaseServerName().retryWhen(err=>{
            return err.scan((count)=>{
                ++count;
                if(count<5) {
                    console.log("Retrying #"+count)
                    return count;
                } else {
                    throw(err);
                }
            },0).delay(1000);
        }).subscribe(
            dbname=>{
                this.dbname=dbname;
                this.message=null;
            },
            error=>{
                this.message="Problem with the service. Please try again or call our support center.";
            }
        )
    }

    cancelSubscription() : void{
        if(this.subscription && !this.subscription.closed) {
            this.message="Cancelled";
            this.subscription.unsubscribe();
        }
    }

    subscriptionOpen() : boolean {
        return this.subscription && !this.subscription.closed;
    }
}
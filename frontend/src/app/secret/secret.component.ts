import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

const number = Math.floor(Math.random()*10)+1;

@Component({
    templateUrl:'./secret.component.html'
})
export class Secret implements OnInit {

    secretNumber : number;
    suppliedNumber : number;

    constructor(
        private _activatedRoute : ActivatedRoute,
        private _router : Router
    ) {
    }

    ngOnInit(): void {
        this.suppliedNumber = this._activatedRoute.snapshot.params['number'];
    }
    numbers() : number[] {
        return [0,1,2,3,4,5,6,7,8,9];
    }
    onBackButtonClicked() : void {
        this._router.navigate(['/home']);
    }
}
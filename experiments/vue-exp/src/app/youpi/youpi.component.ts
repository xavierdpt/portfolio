import {Component, ViewChild, ElementRef, AfterContentInit} from '@angular/core';

@Component({
    selector:'youpi',
    templateUrl:'./youpi.component.html'
})
export class YoupiComponent implements AfterContentInit {
    
    @ViewChild('toto') toto : ElementRef;

    ngAfterContentInit(): void {
        console.log(this.toto);
    }

}
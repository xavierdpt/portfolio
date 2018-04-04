import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

import * as anime from 'animejs';

@Component({
    templateUrl: './something.component.html',
    styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit, AfterViewInit, AfterViewChecked {
    
    
    
    animation:any = null;

    ngOnInit(): void {
        
    }

    ngAfterViewInit(): void {
        
    }

    ngAfterViewChecked(): void {
        this.doSomething()
    }

    doSomething():void{
        const element = document.querySelector('#lineDrawing');
        if(!this.animation && element) {
            
            this.animation = anime({
                targets: '#lineDrawing .lines path',
                strokeDashoffset: [0,0],
                strokeDasharray:[(path)=>path.getTotalLength(),(path)=>path.getTotalLength()],
                easing: 'linear',
                duration: 10000,
                //direction: 'alternate',
                //loop: true
              });
        }
    }
}
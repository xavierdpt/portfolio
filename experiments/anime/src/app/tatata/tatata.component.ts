import { Component } from '@angular/core';

import * as anime from 'animejs';

@Component({
    templateUrl: './tatata.component.html',
    styleUrls: ['./tatata.component.css']
})
export class TatataComponent {
    tatata() : void {
        anime({
            targets:".box",
            translateX:250,
            duration:(target,index,count)=>{
                return (index+1)*50;
            },
            delay:(target,index,count)=>{
                return (count-index)*100;
            }
        })
    }
}
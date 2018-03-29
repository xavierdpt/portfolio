import {Component, Input} from '@angular/core';

@Component({
    selector:'box',
    templateUrl:'./box.component.html',
    styleUrls:['./box.component.css']
})
export class BoxComponent {
    @Input()
    text : string = "A"
}
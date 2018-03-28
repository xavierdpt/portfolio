import {Component, Input} from '@angular/core';

@Component({
    selector:'depth',
    templateUrl:'./depth.component.html',
    styleUrls:['./depth.component.css']
})
export class DepthComponent {
    @Input()
    size:number;
    @Input()
    effect:string;
    @Input()
    topDepth:number;
}
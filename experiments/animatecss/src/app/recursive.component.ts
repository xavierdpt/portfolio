import {Component, Input} from '@angular/core';

@Component({
    selector:'recursive',
    templateUrl:'./recursive.component.html',
    styleUrls:['./recursive.component.css']
})
export class RecursiveComponent {
    @Input()
    effects:string[];

    effect:string='flash';

    depth:number=0;


}
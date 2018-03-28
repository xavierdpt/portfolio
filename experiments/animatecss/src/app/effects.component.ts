import {Component, Input} from '@angular/core';

@Component({
    selector:'effects',
    templateUrl:'./effects.component.html',
    styleUrls:['./effects.component.css']
})
export class EffectsComponent {
    @Input()
    effects : string[]
    clicked : any = {};
    handleClick(classname:string) : void {
      this.clicked[classname]=true;
    }
}
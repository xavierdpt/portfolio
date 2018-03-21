import {Component} from '@angular/core';

@Component({
    selector:'nameinput',
    templateUrl:'./nameinput.component.html',
    styleUrls:['./nameinput.component.css']
})
export class NameInput {
    name: string = 'Xavier';
}
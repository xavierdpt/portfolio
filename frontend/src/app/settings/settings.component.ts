import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'settings',
    templateUrl:'./settings.component.html'
})
export class Settings {

    letter : string = 'A';

    @Output()
    letterChangedEmitter : EventEmitter<string> = new EventEmitter<string>();

    @Input()
    str : string;

    @Input()
    n : number;

    onLetterChanged() : void {
        this.letterChangedEmitter.emit(this.letter);
    }
}
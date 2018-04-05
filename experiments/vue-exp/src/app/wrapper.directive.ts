import { Directive, ElementRef, Renderer } from '@angular/core';

import * as Vue from 'vue/dist/vue.js'

Vue.component('sc', {
    props: ['iv'],
    template: '<button v-on:click="increment">{{counter}}</button>',
    data: () => ({ counter: this.iv }),
    methods: {
        increment: () => {
            this.counter += 1;
            this.$emit('increment', this.counter);
        }
    }
});



@Directive({
    selector: '[wrapper]'
})
export class WrapperDirective {
    constructor(elem: ElementRef, renderer: Renderer) {
        const el = elem.nativeElement as HTMLElement;
        debugger;
        new Vue({el:el.firstChild.firstChild});
        console.log("Hello from wrapper directive");
    }
}
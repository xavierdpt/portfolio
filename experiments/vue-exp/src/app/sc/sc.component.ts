import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as Vue from 'vue/dist/vue.js'

Vue.component('sc', {
    props: ['counter'],
    template: '<button>{{counter}}X</button>'
});

@Component({
    selector: 'sc',
    template: '<div #host></div>'
})
export class ScComponent implements AfterViewInit {

    @Input()
    counter: number;

    @ViewChild('host')
    host: ElementRef;

    vue: any;

    ngAfterViewInit(): void {
        if (!this.vue) {
            const el = this.host.nativeElement as HTMLElement;
            const scElement = document.createElement('sc');
            scElement.setAttribute(':counter', ''+this.counter);
            el.appendChild(scElement);
            this.vue = new Vue({
                el: el
            });
        }
    }


}
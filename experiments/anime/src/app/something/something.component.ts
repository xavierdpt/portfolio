import { Component, AfterViewChecked } from '@angular/core';

import * as anime from 'animejs';

const get = (id: string) => {
    return document.querySelector(id) as HTMLElement;
}

let standard = 1000;
let fast = 250;

@Component({
    templateUrl: './something.component.html',
    styleUrls: ['./something.component.css']
})
export class SomethingComponent implements AfterViewChecked {

    animation: any = null;

    positions: any = {};

    name: string = "Xavier Dupont";
    occupation: string = "Java EE Engineer";
    introFontSize: string = '3rem';
    headerNameFontSize: string = '2rem';
    headerOccupationFontSize: string = '1rem';

    ngAfterViewChecked(): void {
        this.hideNavBar();
        this.doSomething()
    }

    hideNavBar(): void {
        const navbar: any = document.querySelector("#navbar");
        if (navbar && navbar.style.display != 'none') {
            navbar.style.display = 'none';
        }
    }
    doSomething(): void {
        if (!this.animation) {

            const hi = document.querySelector("#hi") as HTMLElement;
            const intro = document.querySelector("#intro") as HTMLElement;
            const introName = document.querySelector('#intro-name') as HTMLElement;
            const floatingName = document.querySelector('#floating-name') as HTMLElement;
            const floatingOccupation = document.querySelector('#floating-occupation') as HTMLElement;

            hi.style.display = 'none';
            intro.style.display = 'inline-block';

            this.savePosition('#intro-name');
            this.savePosition('#header-name');
            this.savePosition('#intro-occupation');
            this.savePosition('#header-occupation');

            floatingName.style.left = this.positions['#intro-name'].left + 'px';
            floatingName.style.top = this.positions['#intro-name'].top + 'px';

            floatingOccupation.style.left = this.positions['#intro-occupation'].left + 'px';
            floatingOccupation.style.top = this.positions['#intro-occupation'].top + 'px';

            intro.style.display = 'none';

            this.animation = anime.timeline({}).add({
                targets: document.body,
                delay: 500
            });
            this.hi();
            this.introduction();
        }
    }
    hi(): void {
        this.animation.add({
            targets: '#hi',
            opacity: [
                { value: 1, duration: standard },
                { value: 1, duration: 2 * standard },
                { value: 0, duration: standard }
            ],
            delay: standard,
            easing: 'linear',
            duration: standard,
            begin: (anim) => {
                anim.animatables[0].target.style.display = 'inline-block';
            },
            complete: (anim) => {
                anim.animatables[0].target.style.display = 'none';
            }
        });
    }
    introduction(): void {
        this.animation.add({
            targets: '#intro',
            opacity: [
                { value: 1, duration: standard },
                { value: 1, duration: 2 * standard }
            ],
            easing: 'linear',
            duration: standard,
            begin: (anim) => {
                anim.animatables[0].target.style.display = 'inline-block';
            },
        }).add({
            targets: '#intro-occupation-line',
            opacity: [
                { value: 1, duration: standard },
                { value: 1, duration: 2 * standard }
            ],
            easing: 'linear',
            duration: standard,
            begin: (anim) => {
                anim.animatables[0].target.style.display = 'inline-block';
            },
        }).add({
            targets: ['#mynameis', '#ima'],
            opacity: 0,
            //easing: 'linear',
            duration: fast,
            begin: (anim) => {
                anim.animatables[0].target.style.display = 'inline-block';
            }
        }).add({
            targets: '#floating-name',
            translateX: this.positions['#header-name'].left - this.positions['#intro-name'].left,
            translateY: this.positions['#header-name'].top - this.positions['#intro-name'].top,
            fontSize: [this.introFontSize, this.headerNameFontSize],
            duration: fast,
            easing: 'linear',
            begin: (anim) => {
                const nameElement: HTMLElement = document.querySelector('#intro-name');
                const floatingName = anim.animatables[0].target;
                floatingName.style.display = 'inline-block';
                nameElement.style.display = 'none';
            },
            offset: '-=' + (fast)
        }).add({
            targets: '#floating-occupation',
            translateX: this.positions['#header-occupation'].left - this.positions['#intro-occupation'].left,
            translateY: this.positions['#header-occupation'].top - this.positions['#intro-occupation'].top,
            fontSize: [this.introFontSize, this.headerOccupationFontSize],
            duration: fast,
            easing: 'linear',
            begin: (anim) => {
                const occupationElement: HTMLElement = document.querySelector('#intro-occupation');
                const floatingOccupation = anim.animatables[0].target;
                floatingOccupation.style.display = 'inline-block';
                occupationElement.style.display = 'none';
            },
            complete: (anim) => {
                get('#intro').style.display = 'none';
            },
            offset: '-=' + (fast)
        }).add({
            targets: '#header',
            duration: standard,
            opacity:1,
            complete:(anim)=>{
                //get('#floating-name').style.display='none';
                //get('#floating-occupation').style.display='none';
            }
        }).add({
            targets: '#jsr',
            opacity: [
                { value: 1, duration: standard },
                { value: 1, duration: 2*standard },
                //{ value: 0, duration: standard }
            ],
            begin: (anim) => {
                anim.animatables[0].target.style.display = 'inline-block';
            }
        })
    }
    savePosition(id: string) {
        const bcr = (document.querySelector(id) as HTMLElement).getBoundingClientRect();
        this.positions[id] = { top: bcr.top, left: bcr.left };
    }
}
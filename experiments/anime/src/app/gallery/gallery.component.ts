import { Component } from '@angular/core';

import * as anime from 'animejs';

@Component({
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

    obj: any = { charged: '0%' };

    playPauseAnimation: any;

    cssSelector(): void {
        anime({ targets: '#box1', translateX: 250 });
    }
    domNode(): void {
        anime({ targets: document.querySelector('#box1'), translateX: 250 });
    }
    nodeList(): void {
        anime({ targets: document.querySelectorAll('.box'), translateX: 250 });
    }
    jsObject(): void {
        anime({
            targets: this.obj,
            charged: '100%',
            round: 1,
            easing: 'linear',
            /*update: function() {
              this.obj=obj;
            }*/
        })
    }
    jsArray(): void {
        anime({
            targets: ['#box1', '#box2'],
            translateX: 250
        });
    }
    cssProperty(): void {
        anime({
            targets: '#box1',
            opacity: .5
        });
    }
    cssTransform(): void {
        anime({
            targets: '#box1',
            scale: .7,
            rotate: '1turn',
            background: '#0FF',
            duration: 3000
        })
    }
    domAttributes(): void {
        anime({
            targets: '#input',
            value: 1000,
            duration: 3000
        })
    }
    svgAttributes(): void {
        anime({
            targets: '#svg circle',
            r: 27
        })
    }
    duration(): void {
        anime({
            targets: "#box1",
            translateX: 250,
            duration: 3000
        })
    }
    delay(): void {
        anime({
            targets: "#box1",
            translateX: 250,
            duration: 3000,
            delay: 3000
        })
    }
    easing(): void {
        anime({
            targets: "#box1",
            translateX: 250,
            duration: 3000,
            easing: 'easeInOutQuart'
        })
    }
    specific(): void {
        anime({
            targets: "#box1",
            translateX: {
                value: 250,
                duration: 800
            },
            rotate: {
                value: 360,
                duration: 800,
                delay: 800
            },
            scale: {
                value: .5,
                duration: 800,
                delay: 1600
            }
        });
    }
    functionBased(): void {
        anime({
            targets: ["#box1", "#box2"],
            translateX: 250,
            duration: (target) => target.id == 'box1' ? 5000 : 10000,
            delay: (target, index) => index * 5000,
            elasticity: (target, index, count) => count * 200
        });
    }
    alternate(): void {
        anime({
            targets: "#box1",
            translateX: 250,
            direction: 'alternate',
            duration: 500
        })
    }
    reverse(): void {
        anime({
            targets: "#box1",
            translateX: 250,
            direction: 'reverse'
        })
    }
    loop(): void {
        anime({
            targets: "#box1",
            translateX: 250,
            direction: 'alternate',
            loop: true
        })
    }
    relative(): void {
        anime({
            targets: "#box1",
            translateX: "+=100",
            duration: 1000
        })
    }
    color(): void {
        anime({
            targets: "#box1",
            background: "#FFF",
            duration: 1000,
            loop: true,
            direction: "alternate",
            easing: 'linear'
        })
    }
    initialValue(): void {
        anime({
            targets: "#box1",
            translateX: [100, 250],
            duration: 10000,
            easing: 'linear'
        })
    }
    functionValue(): void {
        anime({
            targets: "#box1",
            translateX: (target, index, count) => {
                console.log({ target, index, count });
                return 250 * index;
            }
        })
    }
    keyframes(): void {
        const keyframes = [];
        for (let duration = 1000; duration > 0; duration -= 1) {
            keyframes.push({ value: 1000, duration });
            keyframes.push({ value: 0, duration });
        }
        anime({
            targets: "#box1",
            translateX: keyframes,
            easing: "linear"
        })
    }
    timeline(): void {
        anime.timeline().add({
            targets: "#box1",
            translateX: 250,
            duration: 1000,
            easing: 'linear'
        }).add({
            targets: "#box2",
            translateX: 250,
            duration: 1000,
            easing: 'linear'
        });
    }
    timelineRelativeOffset(): void {
        anime.timeline().add({
            targets: "#box1",
            translateX: 250,
            duration: 1000,
            easing: 'linear'
        }).add({
            targets: "#box2",
            translateX: 250,
            duration: 1000,
            easing: 'linear',
            offset: '-=100'
        });
    }
    timelineAbsoluteOffset(): void {
        anime.timeline().add({
            targets: "#box1",
            translateX: 250,
            duration: 1000,
            easing: 'linear'
        }).add({
            targets: "#box2",
            translateX: 250,
            duration: 1000,
            easing: 'linear',
            offset: 100
        });
    }
    timelineGlobalParameters(): void {
        anime.timeline({ loop: true, direction: 'alternate' }).add({
            targets: "#box1",
            translateX: 250,
            duration: 1000,
            easing: 'linear'
        }).add({
            targets: "#box2",
            translateX: 250,
            duration: 1000,
            easing: 'linear'
        });
    }
    playPause(): void {
        if (!this.playPauseAnimation) {
            this.playPauseAnimation = anime({
                targets: "#box1",
                translateX: 250,
                duration: 1000,
                easing: 'linear',
                direction: 'alternate',
                loop: true
            })
        } else {
            if (this.playPauseAnimation.paused) {
                this.playPauseAnimation.play();
            } else {
                this.playPauseAnimation.pause();
            }
        }
    }
    restart(): void {
        if (this.playPauseAnimation) {
            this.playPauseAnimation.restart();
        }
    }
    reverse2(): void {
        if (this.playPauseAnimation) {
            this.playPauseAnimation.reverse();
        }
    }
    seek() : void {
        if (this.playPauseAnimation) {
            this.playPauseAnimation.seek(this.playPauseAnimation.duration/2);
        }
    }
    callbacks():void{
        anime({
            targets: "#box1",
            translateX: 250,
            duration: 1000,
            easing: 'linear',
            direction: 'alternate',
            loop: true,
            update:(anim)=>{
                console.log("update");
            },
            begin:(anim)=>{
                console.log("begin")
            },
            run:(anim)=>{
                console.log("run");
            },
            complete:(anim)=>{
                console.log("complete");
            }
        })
    }
    promise():void{
        anime({
            targets: "#box1",
            translateX: 250,
            duration: 1000,
            easing: 'linear',
            direction: 'alternate'
        }).finished.then(()=>{
            alert('finished')
        })
    }
}
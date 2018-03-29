import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texts : string[] = 'ABCDEFGHI'.split('');
  handleClick() : void {
    const anime : Function = window['anime'];
    anime({
      targets: 'box .outer',
     // easing:'linear',
      translateX: function(el, i, l) {
        return i%2 ? '100%' : '100%';
      },
      delay:function(el, i, l) {
        return i*100;
      },
      direction:'reverse',
      duration:1000,
    });
  }
}

import { Component } from '@angular/core';
import {IYoupi, AYoupi, ACYoupi} from './youpi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "Xavier Dupont's Portfolio";
  currentLetter : string;
  otherLetter : string;
  words : string[] = ['Abracadabra', 'Abraracourcix', 'Abricot', 'Banane', 'Barman', 'Chocoloat', 'Dory', 'Daltonien', 'Denim']
  y : IYoupi = AYoupi;
  cy : IYoupi = ACYoupi;
  onLetterChanged(letter:string) : void {
    this.currentLetter=letter;
  }
}

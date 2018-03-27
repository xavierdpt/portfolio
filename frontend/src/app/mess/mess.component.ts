import { Component } from '@angular/core';
import {IYoupi, AYoupi, ACYoupi} from '../youpi';

@Component({
  selector: 'mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.css']
})
export class Mess {
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

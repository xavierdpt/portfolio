import { Component, OnInit, HostListener, Input } from '@angular/core';

import { createSelector } from 'reselect'

const getEffects = (effects) => effects;

const getMappingS = createSelector([getEffects], (effects) => {
  console.log("Recomputing getMappingS");
  const mapping = {};
  for (let i = 0; i < 26; ++i) {
    mapping[String.fromCharCode(i + 97)] = effects[i];
  }
  return mapping;
});

const getMappingAsArrayS = createSelector([getMappingS], (mapping)=>{
  console.log("Recomputing getMappingAsArrayS");
  const mappingAsArray = [];
  for (const k in mapping) {
    mappingAsArray.push({ ch: k, effect: mapping[k] });
  }
  return mappingAsArray;
});

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Input()
  effects: string[];

  effect: string = "";

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.effect = this.getMappings()[event.key];
    console.log(this.effect);
    console.log(this.effects.length)
  }

  getEffect(): string {
    return this.effect;
  }

  getMappings(): any {
    return getMappingS(this.effects);
  }

  getMappingsAsArray(): any[] {
    return getMappingAsArrayS(this.effects);
  }
}

import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Input()
  effects : string[];

  effect : string = "";

  mapping : any = null;

  mappingAsArray : any[] = null;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event : KeyboardEvent)  : void {
    this.effect=this.getMappings()[event.key];
    console.log(this.effect);
  }

  getEffect() : string {
    return this.effect;
  }

  getMappings() : any {
    if(this.mapping) {
      return this.mapping;
    }
    const mapping = {};
    for(let i=0;i<26;++i) {
      mapping[String.fromCharCode(i+97)] = this.effects[i];
    }
    this.mapping = mapping;
    return mapping;
  }
  
  getMappingsAsArray() : any[] {
    if(this.mappingAsArray) {
      return this.mappingAsArray;
    }
    const mapping = this.getMappings();
    const mappingAsArray = [];
    for(const k in mapping) {
      mappingAsArray.push({ch:k,effect:mapping[k]});
    }
    this.mappingAsArray = mappingAsArray;
    return mappingAsArray;
  }
}

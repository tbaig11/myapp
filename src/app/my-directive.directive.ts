import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(elem:ElementRef) { 
    var node=elem.nativeElement;
    node.style.color='orange'
    node.style.fontstyle='italic';
  }

}

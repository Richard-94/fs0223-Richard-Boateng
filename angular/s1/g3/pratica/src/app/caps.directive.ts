import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCaps]'
})
export class CapsDirective {

  constructor(
    private ref:ElementRef
    ) { }
  ngOnInit(){
    this.ref.nativeElement.style.color='green'
  }

}

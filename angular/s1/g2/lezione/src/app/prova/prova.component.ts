import { Component } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent {
visible:boolean = true;
toggle(){
  this.visible = !this.visible
}
}

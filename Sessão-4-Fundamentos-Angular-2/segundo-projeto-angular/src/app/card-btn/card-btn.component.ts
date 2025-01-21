import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-btn',
  standalone: false,

  templateUrl: './card-btn.component.html',
  styleUrl: './card-btn.component.scss'
})
export class CardBtnComponent {
  contador = 0;

  @Output() btnClickEmmiter = new EventEmitter <number> (); // aqui é  basicamente estou criando uma propriedade para o componente filho que é evento de emissão e estou dando um nome para ele para aciona-lo quando precisar, e tipando o que será emitido do filho para o pai.

  onClick(){
    this.contador = this.contador+1;

    this.btnClickEmmiter.emit(this.contador);
  }
}

import { Component } from '@angular/core';

@Component({ //decorator
  selector: 'app-card', //como o componente vai referenciado em outros componentes
  standalone: false,

  templateUrl: './card.component.html', // é o template que o componente vai usar quando for referenciado
  styleUrl: './card.component.scss' // é o estilo que o componente vai usar quando for utilizado -- é um array
})
export class CardComponent {
// aqui dentro conseguimos colocar metodos, logicas e propriedades que serão usadas para esse componente

  plano = {
    tipo: 'Simples',
    preco: '100',
    
  }
}

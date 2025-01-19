import { Component } from '@angular/core';


interface IPlano { // declaro qual vai ser a tipagem do objeto --- evita que o valor seja undefined
  tipo: string,
  preco: number,

}



@Component({ //decorator
  selector: 'app-card', //como o componente vai referenciado em outros componentes
  standalone: false,

  templateUrl: './card.component.html', // é o template que o componente vai usar quando for referenciado
  styleUrl: './card.component.scss' // é o estilo que o componente vai usar quando for utilizado -- é um array
})
export class CardComponent {
// aqui dentro conseguimos colocar metodos, logicas e propriedades que serão usadas para esse componente

  plano: IPlano ={ // define que o tipo de plano pode ser qualquer um, então se não tiver uma propriedade desse objeto definida ela pode ainda existir. Mas não é a melhor opção
    tipo: 'Simples',
    preco: 100,

  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  valueEmitted = 1;
  // O input faz esse comunicação entre componente pai e componente filho, nesse caso o componente pai terá as informações do componente filho e o input pega essas informações do componente pai para o componente filho. Ele cria uma propriedade para (nesse caso) o app card e podemos usa-lo usando o property binding
  @Input('planType') planType : string = ''; // criamo uma propriedade chamada planType que vai receber uma str. Temos também uma alias para o nome da propriedade, geralmente é bom deixar com o mesmo nome para não causar confusão. Esse valor ao lado do tipo é o valor padrão dessa propriedade.
  @Input({required: true}) planPrice : number = 0 ; // O required diz que essa propriedade terá que receber um valor do pai, então caso não tenha terá um erro de compilação.

  clicksCounter(valorEmmitted: number){
    this.valueEmitted = valorEmmitted;
  }
}

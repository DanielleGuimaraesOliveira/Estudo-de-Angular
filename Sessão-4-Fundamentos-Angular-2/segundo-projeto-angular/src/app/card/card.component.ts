import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  valueEmitted = 1;

  private _planType: string = ''; // essa não vai ser a propriedade que vai ser externalizada para o componente, e ninguem pode modificar ela sem ser dentro da classe

  // O input faz esse comunicação entre componente pai e componente filho, nesse caso o componente pai terá as informações do componente filho e o input pega essas informações do componente pai para o componente filho. Ele cria uma propriedade para (nesse caso) o app card e podemos usa-lo usando o property binding
  @Input('planType') set planType(value: string){
    //aqui dentro conseguimos interceptar o valor que está sendo recebido pelo componente e modificar ela antes que ela seja externalizada.

    this._planType = value.toLocaleUpperCase(); // então eu to privando que o valor que seja recebido por esse input seja modificado fora dessa classe
  }; // criamos uma propriedade chamada planType que vai receber uma str. Temos também uma alias para o nome da propriedade, geralmente é bom deixar com o mesmo nome para não causar confusão. Esse valor ao lado do tipo é o valor padrão dessa propriedade.
  // o input está recebendo um valor do elemento pai chamado plantype como modificar esse valor ou fazer uma verificaçõa do plantype antes de ele ser exibido? com o get e o set


  public get planType() : string {
    return this._planType;
  }


  @Input({required: true, transform: (value: number) => value = 3000}) planPrice : number = 0 ; // O required diz que essa propriedade terá que receber um valor do pai, então caso não tenha terá um erro de compilação.

   clicksCounter(valorEmmitted: number){
    this.valueEmitted = valorEmmitted;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent], // declaro que esses componentes pertencem a esse modulo

  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    CardComponent,// declaro quais componentes que pertencem a esse modulo podem ser usados por outros modulos
    // CardButtonComponent --- componentes filhos não precisam ser exportados para serem usados pelo modulo que ira usa-lo
  ]
})
export class CardsModule { }

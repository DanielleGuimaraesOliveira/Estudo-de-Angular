import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCardComponent } from '../components/btn-card/btn-card.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [BtnCardComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports:[ CardComponent],
})
export class CardsModule { }

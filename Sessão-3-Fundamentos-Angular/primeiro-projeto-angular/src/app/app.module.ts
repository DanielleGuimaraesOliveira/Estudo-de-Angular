import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardsModule } from './cards/cards.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [ // um array para sempre quando eu for referenciar um componente em um modulo eu tenho que referenciar ele aqui, para estarem no mesmo modulo -- pipes tambem ficam aqui
    AppComponent,

  ],
  imports: [ // um array de funcionalidades que estão externas ao modulos, para usa-las preciso importar-las
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent] // o appModule é o primeiro modulo carregado e ele fará o bootstrap do appComponent que é nosso primeiro componente. E o appModule que será inicializado primeiro pode chamar outros Modulos
})
export class AppModule { }

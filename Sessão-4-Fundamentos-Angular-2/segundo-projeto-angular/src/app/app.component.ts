import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'segundo-projeto-angular';

  inputText = 'Texto INICIAL';
  isDisable = false;
  btnTitle = 'esse é o title';
  cardPlanType = 'Completo';
  cardPlanPrice = 250;
  cardPlanType2 = 'Simples';
  cardPlanPrice2 = 100;

  styleObj = {
    color: 'aquamarine',
    backgroundColor: 'black',
    width: '200px',
  };

  updateColorAndSize(){
    this.styleObj = {
      color: 'pink',
      backgroundColor: 'black',
      width: '400px',

    };
 };

  changeDisable(){
    if(this.isDisable==false){
      this.isDisable = true;
    }else{
      this.isDisable =false
    }
  }


}

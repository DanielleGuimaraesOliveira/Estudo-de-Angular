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

  changeDisable(){
    if(this.isDisable==false){
      this.isDisable = true;
    }else{
      this.isDisable =false
    }
  }
}

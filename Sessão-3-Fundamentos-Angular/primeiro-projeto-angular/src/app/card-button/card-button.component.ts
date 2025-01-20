import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,

  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  @Input() cor?:string;
  
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input ({required: true}) typePlan : string = '';
  @Input ({required: true}) pricePlan : string = '';
  @Input ({required:true}) colorPlan : 'orange' | 'purple' = 'purple';
}

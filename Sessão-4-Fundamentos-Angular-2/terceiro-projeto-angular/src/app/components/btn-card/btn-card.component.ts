import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-card',
  standalone: false,

  templateUrl: './btn-card.component.html',
  styleUrl: './btn-card.component.scss'
})
export class BtnCardComponent {
  @Input({required: true}) BtnStyle : 'white' | 'purple' = 'purple';
}

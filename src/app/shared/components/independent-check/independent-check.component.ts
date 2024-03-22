import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-independent-check',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule],
  templateUrl: './independent-check.component.html',
  styleUrl: './independent-check.component.scss',
})
export class IndependentCheckComponent {
  checked = false;

  onCheck(event: MatCheckboxChange) {
    this.checked = event.checked;
    console.log(this.checked);
  }
}

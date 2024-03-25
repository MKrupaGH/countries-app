import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { getAllCountries } from '../../../store/countries.actions';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from '../../../store/shared/shared.actions';

@Component({
  selector: 'app-independent-check',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule],
  templateUrl: './independent-check.component.html',
  styleUrl: './independent-check.component.scss',
})
export class IndependentCheckComponent {
  constructor(private store: Store) {}

  onCheck(event: MatCheckboxChange) {
    this.store.dispatch(getAllCountries({ independent: !event.checked }));
    this.store.dispatch(setLoadingSpinner({ status: true }));
  }
}

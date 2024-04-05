import { Component, OnInit } from '@angular/core';
import { CountriesListComponent } from '../../../shared/components/countries-list/countries-list.component';
import { SearchWindowComponent } from '../../components/search-window/search-window.component';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from '../../../store/shared/shared.actions';
import { getFavoriteCountry } from '../../../store/countries.actions';
import {
  getAll,
  getAllToSearch,
  getCodes,
} from '../../../store/countries.selector';
import { Observable } from 'rxjs';
import { Country } from '../../../shared/models/country.model';
import { Codes } from '../../../shared/mock-countries';

@Component({
  selector: 'app-my-countries',
  standalone: true,
  imports: [SearchWindowComponent, CountriesListComponent],
  templateUrl: './my-countries.component.html',
  styleUrl: './my-countries.component.scss',
})
export class MyCountriesComponent implements OnInit {
  countriesAll$!: Observable<Country[]>;
  codes = Codes;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(getFavoriteCountry({ codes: this.codes }));
    this.countriesAll$ = this.store.select(getAll);
  }
}

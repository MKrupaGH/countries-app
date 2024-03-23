import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country.model';
import { Countries } from '../../mock-countries';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllCountries } from '../../../store/countries.actions';
import { getCountries } from '../../../store/countries.selector';
import { setLoadingSpinner } from '../../../store/shared/shared.actions';
@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountryDetailComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss',
})
export class CountriesListComponent implements OnInit {
  countries$!: Observable<Country[]>;
  countries: Country[] = Countries;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(getAllCountries());
    this.countries$ = this.store.select(getCountries);
  }
}

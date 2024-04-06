import { Component, OnInit } from '@angular/core';
import { CountriesListComponent } from '../../../shared/components/countries-list/countries-list.component';

import { SearchWindowComponent } from '../../components/search-window/search-window.component';
import { Store } from '@ngrx/store';
import { getAllCountries } from '../../../store/countries.actions';
import { Observable } from 'rxjs';
import { Country } from '../../../shared/models/country.model';
import { getAll, getAllToSearch } from '../../../store/countries.selector';
import { setLoadingSpinner } from '../../../store/shared/shared.actions';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [SearchWindowComponent, CountriesListComponent],
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.scss',
})
export class CountriesPageComponent implements OnInit {
  countriesAll$!: Observable<Country[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(getAllCountries({ independent: true }));
    this.countriesAll$ = this.store.select(getAll);
  }
}

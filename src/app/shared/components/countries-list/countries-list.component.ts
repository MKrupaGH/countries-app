import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country.model';
import { Countries } from '../../mock-countries';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllCountries } from '../../../store/countries.actions';
import {
  getCountries,
  getCountriesLength,
} from '../../../store/countries.selector';
import { setLoadingSpinner } from '../../../store/shared/shared.actions';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Constants } from '../../constant';
@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountryDetailComponent, MatPaginatorModule],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss',
})
export class CountriesListComponent implements OnInit {
  countries$!: Observable<Country[]>;
  countriesLength$!: Observable<number>;
  //countries: Country[] = Countries;

  pageSize = Constants.paginatorConstants.defaultPageSize;
  pageIndex = 1;
  pageSizeOptions = Constants.paginatorConstants.pageSizeOptions;
  showPageSizeOptions = true;
  showFirstLastButtons = true;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(getAllCountries());
    this.countriesLength$ = this.store.select(getCountriesLength);
    this.countries$ = this.store.select(
      getCountries(this.pageSize, this.pageIndex)
    );
  }

  handlePageEvent($event: PageEvent) {
    this.pageSize = $event.pageSize;
    this.pageIndex = $event.pageIndex;
    this.countries$ = this.store.select(
      getCountries(this.pageSize, this.pageIndex + 1)
    );
    window.scroll(0, 0);
  }
}

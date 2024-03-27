import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CommonModule } from '@angular/common';
import { Observable, combineLatestWith, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllCountries } from '../../../store/countries.actions';
import { getAllToSearch } from '../../../store/countries.selector';
import { setLoadingSpinner } from '../../../store/shared/shared.actions';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Constants } from '../../constant';
import { SearchedService } from '../search/searched.service';
import { PaginatorPipe } from '../../pipes/paginator.pipe';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [
    CommonModule,
    CountryDetailComponent,
    MatPaginatorModule,
    PaginatorPipe,
  ],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss',
})
export class CountriesListComponent implements OnInit {
  countries$!: Observable<Country[]>;

  pageSize = Constants.paginatorConstants.defaultPageSize;
  pageIndex = 0;
  pageSizeOptions = Constants.paginatorConstants.pageSizeOptions;
  showPageSizeOptions = true;
  showFirstLastButtons = true;

  constructor(private store: Store, private searchedService: SearchedService) {}

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(getAllCountries({ independent: true }));
    this.countries$ = this.store.select(getAllToSearch).pipe(
      combineLatestWith(
        this.searchedService.valueChangeSearch,
        this.searchedService.valueRegionSelect
      ),
      map(([countries, searchQuery, regionQuery]) =>
        countries.filter(
          (country) =>
            country.name.common
              .toLowerCase()
              .startsWith(searchQuery.toLowerCase()) &&
            country.region.includes(regionQuery)
        )
      )
    );
  }

  handlePageEvent($event: PageEvent) {
    this.pageSize = $event.pageSize;
    this.pageIndex = $event.pageIndex;
    window.scroll(0, 0);
  }
}

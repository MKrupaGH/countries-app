import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CommonModule } from '@angular/common';
import { Observable, combineLatestWith, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
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
  @Input() countriesStored$!: Observable<Country[]>;

  countries$!: Observable<Country[]>;

  pageSize = Constants.paginatorConstants.defaultPageSize;
  pageIndex = 0;
  pageSizeOptions = Constants.paginatorConstants.pageSizeOptions;
  showPageSizeOptions = true;
  showFirstLastButtons = true;

  constructor(private store: Store, private searchedService: SearchedService) {}

  ngOnInit(): void {
    this.countries$ = this.countriesStored$.pipe(
      combineLatestWith(
        this.searchedService.valueChangeSearch,
        this.searchedService.valueRegionSelect
      ),
      map(([countries, searchQuery, regionQuery]) =>
        countries
          .filter(
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

import { Component } from '@angular/core';
import { CountriesListComponent } from '../../../shared/components/countries-list/countries-list.component';
import { FilterComponent } from '../../../shared/components/filter/filter.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { IndependentCheckComponent } from '../../../shared/components/independent-check/independent-check.component';
import { SearchComponent } from '../../../shared/components/search/search.component';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [
    CountriesListComponent,
    FilterComponent,
    IndependentCheckComponent,
    CountriesPageComponent,
    SearchComponent,
    PaginatorComponent,
  ],
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.scss',
})
export class CountriesPageComponent {}

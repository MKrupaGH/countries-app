import { Component } from '@angular/core';
import { CountriesListComponent } from '../../../shared/components/countries-list/countries-list.component';

import { SearchWindowComponent } from '../../components/search-window/search-window.component';

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [SearchWindowComponent, CountriesListComponent],
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.scss',
})
export class CountriesPageComponent {}

import { Component } from '@angular/core';
import { FilterComponent } from '../../../shared/components/filter/filter.component';
import { IndependentCheckComponent } from '../../../shared/components/independent-check/independent-check.component';
import { SearchComponent } from '../../../shared/components/search/search.component';
@Component({
  selector: 'app-search-window',
  standalone: true,
  imports: [SearchComponent, FilterComponent, IndependentCheckComponent],
  templateUrl: './search-window.component.html',
  styleUrl: './search-window.component.scss',
})
export class SearchWindowComponent {}

import { Component } from '@angular/core';
import { Country } from '../../models/country.model';
import { Countries } from '../../mock-countries';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountryDetailComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss',
})
export class CountriesListComponent {
  countries: Country[] = Countries;
}

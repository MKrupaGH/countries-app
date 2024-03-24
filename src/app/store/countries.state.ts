import { Country } from '../shared/models/country.model';

export interface CountriesState {
  countries: Country[];
  countriesLength: number;
}

export const initialState: CountriesState = {
  countries: [],
  countriesLength: 0,
};

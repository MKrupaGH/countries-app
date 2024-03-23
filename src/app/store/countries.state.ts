import { Country } from '../shared/models/country.model';

export interface CountriesState {
  countries: Country[];
}

export const initialState: CountriesState = {
  countries: [],
};

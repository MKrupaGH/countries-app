import { Country } from '../shared/models/country.model';
import { CCA2 } from '../shared/models/code.model';
import { Codes } from '../shared/mock-countries';

export interface CountriesState {
  countries: Country[];
  favoriteCountries: CCA2[];
}

export const initialState: CountriesState = {
  countries: [],
  favoriteCountries: Codes,
};

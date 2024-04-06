import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from './countries.state';
import { Country } from '../shared/models/country.model';

export const COUNTRIES_STATE_NAME = 'countries';

export const getCountriesState =
  createFeatureSelector<CountriesState>(COUNTRIES_STATE_NAME);

export const getAllToSearch = createSelector(
  getCountriesState,
  (state) => state.countries
);

export const getCodes = createSelector(
  getCountriesState,
  (state) => state.favoriteCountries
);

export const getAll = createSelector(
  getAllToSearch,
  getCodes,
  (allCountries: Country[], codes: string[]) => {
    if (allCountries && codes) {
      return allCountries.map((country) => {
        if ([...codes].includes(country.cca2)) {
          return { ...country, isLiked: true };
        } else {
          return { ...country, isLiked: false };
        }
      });
    }
    return allCountries;
  }
);

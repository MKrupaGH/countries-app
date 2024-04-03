import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from './countries.state';

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

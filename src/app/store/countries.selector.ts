import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from './countries.state';

export const COUNTRIES_STATE_NAME = 'countries';

export const getCountriesState =
  createFeatureSelector<CountriesState>(COUNTRIES_STATE_NAME);

export const getCountries = createSelector(getCountriesState, (state) => {
  return state.countries;
});

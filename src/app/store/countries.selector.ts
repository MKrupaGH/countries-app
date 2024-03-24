import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from './countries.state';

export const COUNTRIES_STATE_NAME = 'countries';

export const getCountriesState =
  createFeatureSelector<CountriesState>(COUNTRIES_STATE_NAME);

export const getCountries = (pageSize: number, pageIndex: number) =>
  createSelector(getCountriesState, (state) => {
    return state.countries.slice(
      pageSize * (pageIndex - 1),
      pageSize * pageIndex
    );
  });

export const getCountriesLength = createSelector(
  getCountriesState,
  (state) => state.countriesLength
);

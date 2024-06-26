import { createReducer, on } from '@ngrx/store';
import { initialState } from './countries.state';
import * as Action from './countries.actions';
export const _countriesReducer = createReducer(
  initialState,
  on(Action.getAllCountriesSuccess, (state, action) => {
    return {
      ...state,
      countries: action.countries,
    };
  }),
  on(Action.getFavoriteCountrySuccess, (state, action) => {
    return {
      ...state,
      countries: action.countries,
    };
  }),
  on(Action.addFavoriteCountry, (state, action) => {
    return {
      ...state,
      favoriteCountries: [...state.favoriteCountries, action.code],
    };
  }),
  on(Action.deleteFavoriteCountry, (state, action) => {
    return {
      ...state,
      favoriteCountries: [...state.favoriteCountries].filter(
        (code) => code !== action.code
      ),
    };
  })
);

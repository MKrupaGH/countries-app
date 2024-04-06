import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Country } from '../shared/models/country.model';
import { CCA2 } from '../shared/models/code.model';

const httpErrorProps = props<{ error: HttpErrorResponse }>();

export const GET_ALL_COUNTRIES = '[countries page] get all countries';
export const GET_ALL_COUNTRIES_SUCCESS =
  '[countries page] get all countries success';
export const GET_ALL_COUNTRIES_FAIL = '[countries page] get all countries fail';

export const GET_FAVORITE_COUNTRY = '[countries page] get country code';
export const GET_FAVORITE_SUCCESS = '[countries page] get country code success';
export const GET_FAVORITE_FAIL = '[countries page] get country code fail';

export const ADD_FAVORITE_COUNTRY = '[countries page] add favorite country';
export const ADD_FAVORITE_SUCCESS =
  '[countries page] add favorite country success';
export const ADD_FAVORITE_FAIL = '[countries page] add favorite country fail';

export const DELETE_FAVORITE_COUNTRY =
  '[countries page] delete favorite country';
export const DELETE_FAVORITE_SUCCESS =
  '[countries page] delete favorite country success';
export const DELETE_FAVORITE_FAIL =
  '[countries page] delete favorite country fail';

export const getAllCountries = createAction(
  GET_ALL_COUNTRIES,
  props<{ independent: boolean }>()
);
export const getAllCountriesSuccess = createAction(
  GET_ALL_COUNTRIES_SUCCESS,
  props<{ countries: Country[] }>()
);
export const getAllCountriesFail = createAction(
  GET_ALL_COUNTRIES_FAIL,
  httpErrorProps
);

export const getFavoriteCountry = createAction(
  GET_FAVORITE_COUNTRY,
  props<{ codes: string[] }>()
);
export const getFavoriteCountrySuccess = createAction(
  GET_FAVORITE_SUCCESS,
  props<{ countries: Country[] }>()
);
export const getFavoriteCountryFail = createAction(
  GET_FAVORITE_FAIL,
  httpErrorProps
);

export const addFavoriteCountry = createAction(
  ADD_FAVORITE_COUNTRY,
  props<{ code: string }>()
);

export const addFavoriteCountrySuccess = createAction(
  ADD_FAVORITE_SUCCESS,
  props<{ code: string }>()
);

export const addFavoriteCountryFail = createAction(
  ADD_FAVORITE_FAIL,
  httpErrorProps
);

export const deleteFavoriteCountry = createAction(
  DELETE_FAVORITE_COUNTRY,
  props<{ code: string }>()
);

export const deleteFavoriteCountrySuccess = createAction(
  DELETE_FAVORITE_SUCCESS,
  props<{ code: string }>()
);

export const deleteFavoriteCountryFail = createAction(
  DELETE_FAVORITE_FAIL,
  httpErrorProps
);

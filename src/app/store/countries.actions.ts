import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Country } from '../shared/models/country.model';

const httpErrorProps = props<{ error: HttpErrorResponse }>();

export const GET_ALL_COUNTRIES = '[countries page] get all countries';
export const GET_ALL_COUNTRIES_SUCCESS =
  '[countries page] get all countries success';
export const GET_ALL_COUNTRIES_FAIL = '[countries page] get all countries fail';

export const getAllCountries = createAction(GET_ALL_COUNTRIES);
export const getAllCountriesSuccess = createAction(
  GET_ALL_COUNTRIES_SUCCESS,
  props<{ countries: Country[]; countriesLength: number }>()
);
export const getAllCountriesFail = createAction(
  GET_ALL_COUNTRIES_FAIL,
  httpErrorProps
);

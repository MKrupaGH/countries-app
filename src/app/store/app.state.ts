import { _countriesReducer } from './countries.reducer';
import { _sharedReducer } from './shared/shared.reducer';

export interface AppState {}
export const appReducer = {
  countries: _countriesReducer,
  shared: _sharedReducer,
};

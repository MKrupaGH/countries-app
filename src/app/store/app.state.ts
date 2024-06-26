import { _countriesReducer } from './countries.reducer';
import { COUNTRIES_STATE_NAME } from './countries.selector';
import { CountriesState } from './countries.state';
import { _sharedReducer } from './shared/shared.reducer';

import { localStorageSync } from 'ngrx-store-localstorage';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';
import { AUTH_STATE_NAME } from '../auth/state/auth.selectors';
import { AuthState } from '../auth/state/auth.state';
import { _authReducer } from '../auth/state/auth.reducer';

export function localStorageSyncReducer(rootReducer: any) {
  return localStorageSync({
    keys: ['favoriteCountries'],
    rehydrate: true,
    checkStorageAvailability: true,
  })(rootReducer);
}

export interface AppState {
  [COUNTRIES_STATE_NAME]: CountriesState;
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
}
export const appReducer = {
  countries: localStorageSyncReducer(_countriesReducer),
  shared: _sharedReducer,
  auth: _authReducer,
};

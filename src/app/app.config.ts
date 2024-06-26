import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appReducer, localStorageSyncReducer } from './store/app.state';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CountriesEffects } from './store/countries.effects';
import { _countriesReducer } from './store/countries.reducer';
import { _sharedReducer } from './store/shared/shared.reducer';
import { AuthEffects } from './auth/state/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(appReducer),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([CountriesEffects, AuthEffects]),
  ],
};

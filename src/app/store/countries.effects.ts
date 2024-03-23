import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountriesService } from '../shared/services/countries.service';

import * as Action from './countries.actions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from './shared/shared.actions';
@Injectable()
export class CountriesEffects {
  constructor(
    private actions$: Actions,
    private countriesService: CountriesService,
    private store: Store
  ) {}

  getAllCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Action.getAllCountries),
      exhaustMap((action) => {
        return this.countriesService.getAllCountries().pipe(
          map((countries) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return Action.getAllCountriesSuccess({ countries });
          }),
          catchError((err) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(Action.getAllCountriesFail({ error: err }));
          })
        );
      })
    );
  });
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountriesService } from '../shared/services/countries.service';

import * as Action from './countries.actions';
import {
  Observable,
  catchError,
  combineLatestWith,
  concatMap,
  exhaustMap,
  forkJoin,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from './shared/shared.actions';
import { getCodes } from './countries.selector';
import { Country } from '../shared/models/country.model';
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
        return this.countriesService.getAllCountries(action.independent).pipe(
          map((countries) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return Action.getAllCountriesSuccess({
              countries,
            });
          }),
          catchError((err) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(Action.getAllCountriesFail({ error: err }));
          })
        );
      })
    );
  });

  getFavoriteCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Action.getFavoriteCountry),
      withLatestFrom(this.store.select(getCodes)),
      mergeMap(([action, codes]) => {
        const requests = codes.map((code) =>
          this.countriesService.getCountryByCode(code.cca2)
        );
        return forkJoin(requests).pipe(
          map((countries) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return Action.getFavoriteCountrySuccess({
              countries: countries.flat(),
            });
          }),
          catchError((err) => of(Action.getFavoriteCountryFail(err)))
        );
      })
    )
  );

  // getFavoriteCountries2$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(Action.getFavoriteCountry),
  //     concatMap((action) =>
  //       forkJoin(
  //         action.codes.map((code) =>
  //           this.countriesService
  //             .getCountryByCode(code.cca2)
  //             .pipe(catchError((error) => of()))
  //         )
  //       ).pipe(
  //         map((countries) => Action.getFavoriteCountrySuccess({ countries })),
  //         catchError((error) => of(Action.getAllCountriesFail({ error })))
  //       )
  //     )
  //   )
  // );
}

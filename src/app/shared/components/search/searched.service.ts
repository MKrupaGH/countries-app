import { Injectable } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  startWith,
} from 'rxjs';

enum Fields {
  SEARCH = 'search',
  REGION = 'region',
}

interface FormType {
  [Fields.SEARCH]: FormControl<string>;
  [Fields.REGION]: FormControl<string>;
}

@Injectable({
  providedIn: 'root',
})
export class SearchedService {
  private searchForm = this.fb.group<FormType>({
    [Fields.SEARCH]: this.fb.control(''),
    [Fields.REGION]: this.fb.control(''),
  });

  constructor(private fb: NonNullableFormBuilder) {}

  get FormSearch(): FormGroup<FormType> {
    return this.searchForm;
  }

  get valueChangeSearch(): Observable<string> {
    return this.searchForm
      .get('search')!
      .valueChanges.pipe(
        startWith(''),
        debounceTime(250),
        distinctUntilChanged()
      );
  }

  get valueRegionSelect(): Observable<string>{
    return this.searchForm
      .get('region')!
      .valueChanges.pipe(
        startWith(''),
        debounceTime(250),
        distinctUntilChanged()
      );
  }
}

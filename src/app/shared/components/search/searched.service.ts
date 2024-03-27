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
}

interface FormType {
  [Fields.SEARCH]: FormControl<string>;
}

@Injectable({
  providedIn: 'root',
})
export class SearchedService {
  private searchForm = this.fb.group<FormType>({
    [Fields.SEARCH]: this.fb.control(''),
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
}

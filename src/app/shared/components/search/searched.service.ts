import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchedService {
  private searchQuery$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  get searchQuery(): Observable<string> {
    return this.searchQuery$.asObservable();
  }

  set searchQuery(phrase: string) {
    this.searchQuery$.next(phrase);
  }
}

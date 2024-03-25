import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(status: boolean): Observable<Country[]> {
    return this.http.get<Country[]>(
      environment.countriesUrl +
        `/independent?status=${status}&fields=flags,name,capital,region,cca2`
    );
  }
}

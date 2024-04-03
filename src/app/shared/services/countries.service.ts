import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';
import { environment } from '../../../environments/environment.development';
import { CCA2 } from '../models/code.model';

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

  getCountryByCode(code: string) {
    return this.http.get<Country>(
      environment.countriesUrl +
        `/alpha?codes=${code}&fields=flags,name,capital,region,cca2`
    );
  }
}

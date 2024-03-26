import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country.model';

@Pipe({
  name: 'paginator',
  standalone: true,
})
export class PaginatorPipe implements PipeTransform {
  transform(
    countries: Country[],
    pageSize: number,
    pageIndex: number
  ): Country[] {
    return countries.slice(pageSize * (pageIndex - 1), pageSize * pageIndex);
  }
}

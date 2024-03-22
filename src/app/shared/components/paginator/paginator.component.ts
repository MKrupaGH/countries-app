import { Component, Injectable } from '@angular/core';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}

/**
 * @title Paginator internationalization
 */
@Component({
  selector: 'app-paginator',
  templateUrl: 'paginator.component.html',
  standalone: true,
  imports: [MatPaginatorModule],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
})
export class PaginatorComponent {}

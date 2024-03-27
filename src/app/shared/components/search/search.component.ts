import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchedService } from './searched.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      ReactiveFormsModule,
    ],
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(private searchedService: SearchedService) {}
  searchForm = this.searchedService.FormSearch;
}

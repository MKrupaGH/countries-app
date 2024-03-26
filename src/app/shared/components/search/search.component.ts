import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
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
    ],
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(private searchedService: SearchedService) {}

  onChange(search: string) {
    this.searchedService.searchQuery = search;
  }
}

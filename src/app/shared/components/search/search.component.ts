import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchedService } from './searched.service';
import { tap } from 'rxjs';

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
export class SearchComponent implements OnInit {
  constructor(private searchedService: SearchedService) {}

  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  ngOnInit(): void {
    this.searchForm
      .get('search')
      ?.valueChanges.subscribe(
        (search) => (this.searchedService.searchQuery = search!)
      );
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../../models/country.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CCA2 } from '../../../models/code.model';
import { Like } from '../../../models/like.model';
@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss',
})
export class CountryDetailComponent {
  @Input() country!: Country;
  @Output() onLike: EventEmitter<Like> = new EventEmitter();

  onClick(code: string, isLiked?: boolean) {
    this.onLike.emit({ code, isLiked });
  }
}

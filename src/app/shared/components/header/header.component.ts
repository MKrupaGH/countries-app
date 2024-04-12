import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthenticated } from '../../../auth/state/auth.selectors';
import { CommonModule } from '@angular/common';
import * as Action from '../../../auth/state/auth.actions';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isAuth$!: Observable<boolean>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isAuth$ = this.store.select(isAuthenticated);
  }

  onLogout() {
    this.store.dispatch(Action.logout());
  }
}

import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { merge } from 'rxjs';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from '../../store/shared/shared.actions';

import * as Action from '../state/auth.actions';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  hide: boolean = true;

  constructor(private authService: AuthService, private store: Store) {}
  logForm = this.authService.log;

  emailValidator = this.authService.showEmailErrors;
  passwordValidator = this.authService.showPasswordErrors;
  //login = this.authService.onLogin;

  onLogin() {
    //const { email, password } = this.logForm.value;
    const email = this.logForm.value.email!;
    const password = this.logForm.value.password!;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(Action.loginUser({ email, password }));
  }
}

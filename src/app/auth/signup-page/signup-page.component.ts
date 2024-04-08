import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { merge } from 'rxjs';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from '../../store/shared/shared.actions';

import * as Action from '../state/auth.actions';
@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
})
export class SignupPageComponent {
  hide: boolean = true;

  constructor(private authService: AuthService, private store: Store) {}
  logForm = this.authService.log;

  emailValidator = this.authService.showEmailErrors;
  passwordValidator = this.authService.showPasswordErrors;
  //signup = this.authService.onSignup;

  onSignup() {
    //const { email, password } = this.logForm.value;
    const email = this.logForm.value.email!;
    const password = this.logForm.value.password!;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(Action.signUpUser({ email, password }));
  }
}

import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Action from './state/auth.actions';
import { setLoadingSpinner } from '../store/shared/shared.actions';
import { Observable, of } from 'rxjs';
import { AppState } from '../store/app.state';

enum Fields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

interface FormType {
  [Fields.EMAIL]: FormControl<string>;
  [Fields.PASSWORD]: FormControl<string>;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logForm = this.fb.group<FormType>({
    [Fields.EMAIL]: this.fb.control('', [
      Validators.required,
      Validators.email,
    ]),
    [Fields.PASSWORD]: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private store: Store<AppState>
  ) {}

  get log(): FormGroup {
    return this.logForm;
  }

  showEmailErrors() {
    const email = this.logForm.get('email');
    if (email?.touched && !email.valid) {
      if (email.errors?.['required']) {
        return 'Email is required';
      }
      if (email.errors?.['email']) {
        return 'Invalid Email';
      }
    }
    return;
  }

  showPasswordErrors() {
    const password = this.logForm.get('password');

    if (password?.touched && !password.valid) {
      if (password.errors?.['required']) {
        return 'Password is required';
      }
      if (password.errors?.['minlength']) {
        return 'Password should be minimum 6 characters';
      }
    }
    return;
  }
}

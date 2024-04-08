import { Injectable } from '@angular/core';
import { AuthResponseData } from '../models/authResponseData.model';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  formatUser(data: AuthResponseData) {
    const expirationDate: Date = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );

    const favorite = ['PL', 'TR'];

    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate,
      favorite
    );
    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'INVALID_LOGIN_CREDENTIALS':
        return 'Email or/and Password are wrong';
      case 'EMAIL_EXISTS':
        return 'Email already exist! Please login or try again';
      default:
        return 'Unknown error';
    }
  }
}

import { Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { CountriesPageComponent } from './countries/pages/countries-page/countries-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { MyCountriesComponent } from './countries/pages/my-countries/my-countries.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  //{ path: '**', redirectTo: 'home' },
  {
    path: 'countries',
    component: CountriesPageComponent,
  },
  {
    path: 'my-countries',
    component: MyCountriesComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'signup',
        component: SignupPageComponent,
      },
    ],
  },
];

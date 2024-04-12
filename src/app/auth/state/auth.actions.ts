import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/user.model';

const LOGIN_USER = '[login page] login user';
const LOGIN_USER_SUCCESS = '[login page] login user success';
const LOGIN_USER_FAIL = '[login page] login user fail';

const SIGN_UP_USER = '[signup page] signup user';
const SIGN_UP_USER_SUCCESS = '[signup page] signup user success';
const SIGN_UP_USER_FAIL = '[signup page] signup user fail';

const LOGOUT = '[auth page] logout user ';

export const loginUser = createAction(
  LOGIN_USER,
  props<{
    email: string;
    password: string;
  }>()
);

export const loginUserSuccess = createAction(
  LOGIN_USER_SUCCESS,
  props<{ user: User }>()
);

export const loginUserFail = createAction(LOGIN_USER_FAIL);

export const signUpUser = createAction(
  SIGN_UP_USER,
  props<{
    email: string;
    password: string;
  }>()
);

export const signUpUserSuccess = createAction(
  SIGN_UP_USER_SUCCESS,
  props<{ user: User }>()
);

export const signUpUserFail = createAction(SIGN_UP_USER_FAIL);

export const logout = createAction(LOGOUT);

import { createReducer, on } from '@ngrx/store';
import * as Action from './auth.actions';
import { initialState } from './auth.state';

export const _authReducer = createReducer(
  initialState,
  on(Action.loginUserSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(Action.signUpUserSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(Action.logoutSuccess, (state, action) => {
    return {
      ...state,
      user: null,
    };
  })
);

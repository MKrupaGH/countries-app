import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';
import { setErrorMessage, setLoadingSpinner } from './shared.actions';

export const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return { ...state, showLoading: action.status };
  }),
  on(setErrorMessage, (state, action) => {
    return { ...state, errorMessage: action.message };
  })
);

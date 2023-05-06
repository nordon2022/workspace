import {UserState} from "./user/user.reducer";
import {ActionReducerMap} from "@ngrx/store";
import * as UserReducer from './user/user.reducer';

export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: UserReducer.userReducer
};

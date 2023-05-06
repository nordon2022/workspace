import {User} from "./user.types";
import {createReducer, on} from "@ngrx/store";
import {Login, Logout} from "./user.action";

export interface UserState {
  user: User | undefined;
  authIsLoading: boolean
}

export const initialState: UserState = {
  user: undefined,
  authIsLoading: false
};

export const userReducer = createReducer(
  initialState,
  on(Login, (state, user) => ({ ...state, user: user })),
  on(Logout, state => ({ ...state, user: undefined })),
);

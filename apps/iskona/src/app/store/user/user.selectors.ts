import {UserState} from "./user.reducer";
import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";

export const selectedUser = (state: AppState) => state.user;

export const selectUser = createSelector(
  selectedUser,
  (state: UserState) => state.user
)

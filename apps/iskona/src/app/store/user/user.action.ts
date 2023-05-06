import {createAction, props} from "@ngrx/store";
import {User, UserInfo} from "./user.types";

export const Login = createAction(
  '[Login Page] Login',
  props<User>()
);

export const Logout = createAction(
  '[Logout Page] Logout'
);

export const Register = createAction(
  '[Register Page] Register',
  props<UserInfo>()
);

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registrationReducer from "./authRegister";
import loginReducer from "./authLogin";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    login: loginReducer,
  },
});

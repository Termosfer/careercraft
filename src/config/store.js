import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/authSlice";
import registrationReducer from "../features/authRegister";
import loginReducer from "../features/authLogin";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    registration: registrationReducer,
    login: loginReducer,
  },
});

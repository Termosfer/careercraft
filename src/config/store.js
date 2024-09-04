import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registrationReducer from "./authRegister";
import loginReducer from "./authLogin";
import questionReducer from "./getQuestions"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    login: loginReducer,
    questions: questionReducer,
  },
});

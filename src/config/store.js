import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registrationReducer from "./authRegister";
import loginReducer from "./authLogin";
import questionReducer from "./authQuestions";
import userReducer from "./authUser";
import reportReducer from "./authReport";
import softSkillReducer from "./getSoftSkillResults"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    login: loginReducer,
    user: userReducer,
    questions: questionReducer,
    report: reportReducer,
    softSkillResult: softSkillReducer
  },
});

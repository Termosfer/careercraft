import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  newPass: "",
  confirmPass: "",
  resetToken: "",
  
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeLastName: (state, action) => {
      state.surname = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changeNewPass: (state, action) => {
      state.newPass = action.payload
    },
    changeConfirmPass: (state, action) => {
      state.confirmPass = action.payload
    },
    changeResetToken: (state, action) => {
      state.resetToken = action.payload
    },
    clearInput: (state) => {
      state.email = "";
      state.password = "";
      state.name = "";
      state.surname = "";
    },

    
    


  },
});

export const { changeName, changeLastName, changeEmail, changePassword, clearInput, changeNewPass, changeConfirmPass, changeResetToken } =
  authSlice.actions;

export default authSlice.reducer;

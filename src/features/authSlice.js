import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
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
  },
});

export const { changeName, changeLastName, changeEmail, changePassword } =
  authSlice.actions;

export default authSlice.reducer;

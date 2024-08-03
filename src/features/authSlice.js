import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loadESLint } from "eslint";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

const registrationInitialState = {
  data: [],
  loading: false,
  error: "",
};

export const register = createAsyncThunk("register", async () => {
  const response = await axios.post("http://44.203.152.52:8080/registration");
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  initialState: registrationInitialState,
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
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(register.fulfilled, (state,action)=>{
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(register.rejected,(state,action)=>{
      state.loading= false;
      state.error = "Error "
    })
  },
});

export const { changeName, changeLastName, changeEmail, changePassword } =
  authSlice.actions;

export default authSlice.reducer;

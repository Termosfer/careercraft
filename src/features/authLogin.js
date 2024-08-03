import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  loading: false,
  error: "",
};

export const login = createAsyncThunk("login", async () => {
  const response = await axios.post(
    "http://44.203.152.52:8080/login",
    userData
  );
  return response.data;
});

const authLogin = createSlice({
  name: "login",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = "Login failed";
      });
  },
});


export default authLogin.reducer
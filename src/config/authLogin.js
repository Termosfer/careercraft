import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

export const login = createAsyncThunk("auth/login", async (loginData) => {
  const response = await axios.post(
    "http://44.203.152.52:8080/api/auth/login",
    loginData
  );
  return response.data;
});

export const user = createAsyncThunk("auth/user", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    "http://44.203.152.52:8080/api/auth/customerId",
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
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
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = "Login failed";
      })
      .addCase(user.pending, (state) => {
        state.loading = true;
      })
      .addCase(user.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(user.rejected, (state) => {
        state.loading = false;
        state.user = null;
      })
  },
});

export default authLogin.reducer;

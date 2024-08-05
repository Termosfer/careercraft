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

export const userData = createAsyncThunk("auth/userData", async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get(
        "http://44.203.152.52:8080/customerInfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
});

export const logout = createAsyncThunk("auth/logout", async()=>{
  localStorage.removeItem("token")
})

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
      .addCase(userData.pending, (state) => {
        state.loading = true;
      })
      .addCase(userData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userData.rejected, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      });
  },
});

export default authLogin.reducer;

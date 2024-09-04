import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

export const login = createAsyncThunk("login/login", async (loginData) => {
  const response = await axios.post(
    "http://35.173.133.91:8070/api/auth/login",
    loginData
  );

  return response.data;
});

export const userData = createAsyncThunk("login/userData", async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get(
        "http://35.173.133.91:8070/customerInfo",
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
      });
  },
});

export default authLogin.reducer;

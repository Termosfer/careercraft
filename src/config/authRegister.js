import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const register = createAsyncThunk("registration/register", async (userData) => {
  const response = await axios.post(
    "http://44.203.152.52:8070/registration",
    userData
  );
  return response.data;
});

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error =
          action.error.message || "Error occurred during registration";
      });
  },
});

export default registrationSlice.reducer;

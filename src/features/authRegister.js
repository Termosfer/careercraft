import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

export const register = createAsyncThunk(
  "register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://44.203.152.52:8080/registration",
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error =
          action.error.message || "Error occurred during registration";
      });
  },
});

export default registrationSlice.reducer;

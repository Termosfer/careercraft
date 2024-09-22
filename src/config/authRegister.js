import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "./api";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const register = createAsyncThunk("registration/register", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${baseURL}/registration`,
      userData
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      return rejectWithValue(error.response.data)
    }
    return rejectWithValue(error.response)
  }

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
      .addCase(register.rejected, (state,action) => {
        state.error =
          action.payload.password
      });
  },
});

export default registrationSlice.reducer;

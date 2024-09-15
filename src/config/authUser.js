import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "./api";

const initialState = {
    username: {},
    loading: false,
    error: ""
}

export const userData = createAsyncThunk("auth/userData", async (token) => {
    if (token) {
      try {
        const response = await axios.get(
          `${baseURL}/api/customers/info`,
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



const authUser = createSlice({
    name: "user",
    initialState,
    
    extraReducers: (builder) => {
        builder
            .addCase(userData.pending, (state) => {
                state.loading = true;
            })
            .addCase(userData.fulfilled, (state, action) => {
                state.username = action.payload;
                state.loading = false;
            })
            .addCase(userData.rejected, (state) => {
                state.error = "Error"
            })
    }
})


export default authUser.reducer
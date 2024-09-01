import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    username: null,
    loading: false,
    error: ""
}


export const userData = createAsyncThunk("userData", async (token) => {
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
})

export const logout = createAsyncThunk("logout", async () => {
    localStorage.removeItem("token")
})

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
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.username = null;
            });
    }
})


export default authUser.reducer
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "./api";

const initialState = {
    loading: false,
    error: "",
    softResult: null
}
const token = localStorage.getItem("token")
export const getSSResults = createAsyncThunk("softSkillResult", async () => {
    if (token) {
        try {
            const response = await axios.get(`${baseURL}/recommendations`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            console.log(error)
        }

    }

})




const getSoftSkillResults = createSlice({
    name: "softSkillResult",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getSSResults.pending, (state) => {
            state.loading = true
        }).addCase(getSSResults.fulfilled, (state, action) => {
            state.softResult = action.payload,
                state.loading = false
        }).addCase(getSSResults.rejected, (state) => {
            state.error = "Something is wrong"
        })

    }
})



export default getSoftSkillResults.reducer
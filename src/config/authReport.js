import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const token = localStorage.getItem("token")
export const getReports = createAsyncThunk("raport", async () => {
    if (token) {
        const response = await axios.get("http://35.173.133.91:8070/reports?categoryId=1", {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

})

export const getAllReports = createAsyncThunk('allreport', async () => {
    if (token) {
        const response = await axios.get("http://35.173.133.91:8070/reports/category/1", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
})


const initialState = {
    raport: null,
    allreport: null,
    loading: false,
    error: null,
}

const authReport = createSlice({
    name: "report",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReports.pending, (state) => {
            state.loading = true
        })
            .addCase(getReports.fulfilled, (state, action) => {
                state.raport = action.payload,
                    state.loading = false
            }).addCase(getReports.rejected, (state, action) => {
                state.error = action.payload
            }).addCase(getAllReports.pending, (state) => {
                state.loading = true
            }).addCase(getAllReports.fulfilled, (state, action) => {
                state.loading = false,
                state.allreport = action.payload
            }).addCase(getAllReports.rejected, (state) => {
                state.error = "Something is wrong"
            })
    }
})


export default authReport.reducer
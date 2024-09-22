import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "./api";



const token = localStorage.getItem("token")
export const getReports = createAsyncThunk("raport", async () => {
    if (token) {
        const response = await axios.get(`${baseURL}/reports?categoryId=1`, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

})

export const getAllReports = createAsyncThunk('allreport', async () => {
    if (token) {
        const response = await axios.get(`${baseURL}/reports/category/1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
})
export const getHardSkillReport = createAsyncThunk("hardSkillReport", async () => {
    if (token) {
        const response = await axios.get(`${baseURL}/reports?categoryId=2`, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

})

export const getHardSkillReports = createAsyncThunk('hardSkillReports', async () => {
    if (token) {
        const response = await axios.get(`${baseURL}/reports/category/2`, {
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
    hardSkillRaport: null,
    hardSkillRaports: null,
}

const authReport = createSlice({
    name: "report",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReports.pending, (state) => {
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
                state.error = "Something is wrong";
            }).addCase(getHardSkillReport.pending, (state) => {
                state.loading = true;
            }).addCase(getHardSkillReport.fulfilled, (state, action) => {
                state.loading = false;
                state.hardSkillRaport = action.payload
            }).addCase(getHardSkillReport.rejected, (state) => {
                state.error = "Something is wrong";
            }).addCase(getHardSkillReports.pending, (state) => {
                state.loading = true;
            }).addCase(getHardSkillReports.fulfilled, (state, action) => {
                state.loading = false;
                state.hardSkillRaports = action.payload
            }).addCase(getHardSkillReports.rejected, (state) => {
                state.error = "Something is wrong";
            })
    }
})


export default authReport.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "./api";

const token = localStorage.getItem("token");
export const getReports = createAsyncThunk("raport", async (value) => {
  if (token) {
    const response = await axios.get(`${baseURL}/reports?categoryId=${value}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
});

export const getAllReports = createAsyncThunk("allreport", async (value) => {
  if (token) {
    const response = await axios.get(`${baseURL}/reports/category/${value}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
});

const initialState = {
  raport: null,
  allreport: [],
  loading: false,
  error: "",
};

const authReport = createSlice({
  name: "report",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReports.fulfilled, (state, action) => {
        (state.raport = action.payload), (state.loading = false);
      })
      .addCase(getReports.rejected, (state) => {
        state.error = "Something is wrong";
      })
      .addCase(getAllReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllReports.fulfilled, (state, action) => {
        (state.loading = false), (state.allreport = action.payload);
      })
      .addCase(getAllReports.rejected, (state) => {
        state.error = "Something is wrong";
      });
  },
});

export default authReport.reducer;

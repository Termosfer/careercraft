import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "./api";
export const getDownload = createAsyncThunk("getFile", async (value) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get(
        `${baseURL}/reports/download?categoryId=${value}`,
        {
          headers: {
            'Content-Type': 'application/pdf',
            'Authorization': `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'reports.pdf';
      alink.click();
      return;
    } catch (error) {
      console.log(error)
    }

  }
});
const initialState = {
  loading: false,
  error: null,
};

const sliceDownload = createSlice({
  name: "downloadFile",
  initialState,
  /* reducers: {
    increaseValue: (state) => {
      state.value = state.value + 1
    },
    decreaseValue: (state) => {
      state.value = state.value - 1
    }
  } */
  extraReducers: (builder) => {
    builder
      .addCase(getDownload.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDownload.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getDownload.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sliceDownload.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "./api";
const token = localStorage.getItem("token");
export const getDownload = createAsyncThunk("getFile", async () => {
  if (token) {
    const response = await axios.get(
      `${baseURL}/reports/download?categoryId=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      }
    );
    return response; // Tüm yanıt nesnesini döndür
  }
});
const initialState = {
  loading: false,
  error: null,
  //   download: null,
};

const sliceDownload = createSlice({
  name: "downloadFile",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDownload.pending, (state) => {
        state.loading = true;
        state.error = null; // Hata mesajını temizleyin
      })
      .addCase(getDownload.fulfilled, (state) => {
        state.loading = false; // İndirme başarılı
      })
      .addCase(getDownload.rejected, (state, action) => {
        state.loading = false; // İndirme başarısız
        state.error = action.error.message; // Hata mesajını saklayın
      });
  },
});

export default sliceDownload.reducer;

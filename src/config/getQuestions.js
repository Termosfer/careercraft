// src/slices/questionsSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Başlangıç durumu
const initialState = {
  question: null,
  loading: false,
  error: '',
};

// Async thunk: API'dan veri çekme
export const getQuestion = createAsyncThunk(
  'questions/getQuestion',
  async () => {
    const response = await axios.get('http://44.203.152.52:8080/questions/grouped-by-skills?skillIds=1&jobId=1&id=0');
    return response.data; // Veriyi döndür
  }
);

// Slice oluşturma
const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestion.pending, (state) => {
        state.loading = true; // Yükleme başladığında
        state.error = ''; // Hata mesajını temizle
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        state.loading = false; // Yükleme tamamlandı
        state.question = action.payload; // Veriyi state'e ekle
      })
      .addCase(getQuestion.rejected, (state) => {
        state.loading = false; // Yükleme tamamlandı
        state.error = 'Error'; // Hata mesajını ayarla
      });
  },
});

export default questionsSlice.reducer;

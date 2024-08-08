
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  question: [],
  loading: false,
  error: '',
};


export const getQuestion = createAsyncThunk(
  'questions/getQuestion',
  async () => {
    const response = await axios.get('http://44.203.152.52:8080/questions/grouped-by-skills?skillIds=1&jobId=1&id=0');
    return response.data.skillsQuestions; 
  }
);


const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestion.pending, (state) => {
        state.loading = true;
        state.error = ''; 
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        state.loading = false; 
        state.question = action.payload;
      })
      .addCase(getQuestion.rejected, (state,action) => {
        state.loading = false; 
        state.error = action.error.message; 
      });
  },
});

export default questionsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  question: [],
  loading: false,
  error: "",
  value: 0,
};

export const getQuestion = createAsyncThunk(
  "questions/getQuestion",
  async (count) => {
    const response = await axios.get(
      `http://44.203.152.52:8080/questions/grouped-by-skills?skillIds=1&jobId=1&id=${count}`
    );
    return response.data.skillsQuestions;
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    changeIncrease: (state) => {
      state.value = state.value + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestion.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
      })
      .addCase(getQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {changeIncrease} = questionsSlice.actions;

export default questionsSlice.reducer;

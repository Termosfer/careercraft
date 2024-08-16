import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  question: [],
  answer: [],
  loading: false,
  error: "",
  value: 0,
};

export const getQuestion = createAsyncThunk(
  "questions/getQuestion",
  async (count) => {
    const token = localStorage.getItem("token")
    if (token) {
      const response = await axios.get(
        `http://44.203.152.52:8070/questions/grouped-by-skills?skillIds=1&jobId=1&id=${count}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      );
      return response.data.skillsQuestions;
    }
  }

);


export const getAnswer = createAsyncThunk("questions/getAnswer", async () => {
  const token = localStorage.getItem("token")
  if (token) {
    const response = await axios.post("http://44.203.152.52:8070/user-answers/answer",{}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    return response.data
  }

})



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
      })
      .addCase(getAnswer.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload;
      })
      .addCase(getAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { changeIncrease } = questionsSlice.actions;

export default questionsSlice.reducer;

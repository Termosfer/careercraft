import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  question: [],
  loading: false,
  error: "",
  value: 1,
  totalCount: "",
  orderValue: null,
  
};

export const getQuestion = createAsyncThunk(
  "questions/getQuestion",
  async (count) => {
    const token = localStorage.getItem("token")
    if (token) {
      const response = await axios.get(
        `http://44.203.152.52:8070/questions/${count}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      );
      return response.data;
    }
  }

);


export const getQuestionsCount = createAsyncThunk("questions/getQuestionsCount", async () => {
  const token = localStorage.getItem("token")
  if (token) {
    const response = await axios.get(`http://44.203.152.52:8070/questions/count`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    return response.data
  }

})

export const getAnswer = createAsyncThunk("questions/getAnswer", async(answer) => {
  const token = localStorage.getItem("token")
  if (token) {
    const response = await axios.post("http://44.203.152.52:8070/user-answers/answer", answer, {
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
    currentAnswerOrderValue: (state, action) => {
      state.orderValue = action.payload
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
      .addCase(getQuestionsCount.fulfilled, (state, action) => {
        state.totalCount = action.payload;
      })

  },
});
export const { changeIncrease, currentAnswer, currentAnswerOrderValue, currentAnswerId } = questionsSlice.actions;

export default questionsSlice.reducer;

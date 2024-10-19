import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "./api";
import toast from "react-hot-toast";

const initialState = {
  user: {},
  loading: false,
  errorMessage: "",
  message: null,
  token: "",
};

export const loginUser = createAsyncThunk(
  "auth/login",

  async (userLogged) => {
    const { data } = await axios.post(`${baseURL}/api/auth/login`, userLogged);
    localStorage.setItem("token", data.accessToken);
    toast.success("Successfully logged in!");
    return data;
  }
);

export const fortgotHandle = createAsyncThunk(
  "auth/password/reset",
  async (email) => {
    const { data } = await axios.post(
      `${baseURL}/api/password/reset-request?email=${email}`
    );
    console.log(data);
    toast.success(
      "Check your Mail please. The link for password reset was sent!"
    );
    return data;
  }
);

export const resetPass = createAsyncThunk(
  "auth/confirmPass",
  async (reset, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/api/password/reset`, reset);
      toast.success("Your password was successfully changed!");
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.response);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("bool");
});

const authLogin = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.token = null;
        state.user = null;
        state.errorMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        state.user = null;
        state.errorMessage = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.user = null;
        state.errorMessage = "Access Denied! Incorrect Email or Password!";
      })

      .addCase(fortgotHandle.fulfilled, (state, action) => {
        state.loading = false;
        state.token = null;
        state.message = action.payload;
        state.errorMessage = null;
      })
      .addCase(fortgotHandle.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.message = null;
        state.errorMessage = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(resetPass.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPass.fulfilled, (state, action) => {
        (state.loading = false), (state.message = action.payload);
      })
      .addCase(resetPass.rejected, (state, action) => {
        state.errorMessage = action.payload.newPassword;
      });
  },
});

export default authLogin.reducer;

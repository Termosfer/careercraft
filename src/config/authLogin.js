import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const initialState = {
  user: {},
  loading: false,
  errorMessage: "",
  message:null,
  token: localStorage.getItem("token")
};

const baseURL = "http://35.173.133.91:8070"


export const loginUser = createAsyncThunk("auth/login",

  async (userLogged) => {
    const { data } = await axios.post(`${baseURL}/api/auth/login`, userLogged)
    console.log(data.accessToken);
    localStorage.setItem("token", data.accessToken);
    toast.success("Successfully logged in!")
    return data;
  }
)

export const userData = createAsyncThunk("auth/userData", async () => {
  if (token) {
    try {
      const response = await axios.get(
        `${backendURL}/customerInfo`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
});


export const fortgotHandle = createAsyncThunk("auth/password/reset", async (email) => {
  const {data} = await axios.post(`${baseURL}/api/password/reset-request?email=${email}`)
  console.log(data);
  toast.success("Email was successfully sent!");
  return data
})

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("token")
})



const authLogin = createSlice({
  name: "login",
  initialState: initialState,

  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.token = null
        state.user = null
        state.errorMessage = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.accessToken
        state.user = null
        state.errorMessage = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.token = null
        state.user = null
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.errorMessage = "Access Denied! Incorrect Email or Password!"
        } else {
          state.errorMessage = action.error.message
        }

      })

      .addCase(fortgotHandle.fulfilled, (state, action) => {
        state.loading = false
        state.token = null
        state.message=action.payload
        state.errorMessage=null

      })
      .addCase(fortgotHandle.rejected, (state, action) => {
        state.loading = false
        state.token = null
        state.message=null
        state.errorMessage=action.error.message

      })
      .addCase(userData.pending, (state) => {
        state.loading = true;
      })
      .addCase(userData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userData.rejected, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      });
  },
});

export default authLogin.reducer;

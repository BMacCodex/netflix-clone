import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  value: 0,
  status: "idle",
};

// Create an async thunk (if needed)
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount) => {
    return new Promise((resolve) => setTimeout(() => resolve(amount), 1000));
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

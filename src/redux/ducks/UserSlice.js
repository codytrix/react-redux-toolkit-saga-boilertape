import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    getUser() {},
    setUser(state, action) {
      return { ...state, error: null, user: action.payload };
    },
    setError(state, action) {
      return { ...state, error: action.payload };
    },
    logOut(state, action) {
      return { ...state, user: null };
    },
  },
});

export const { getUser, setUser, setError, logOut } = userSlice.actions;
export default userSlice.reducer;

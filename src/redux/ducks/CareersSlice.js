import { createSlice } from "@reduxjs/toolkit";

const careersSlice = createSlice({
  name: "careers",
  initialState: {
    careers: null,
    error: null,
    career: null,
  },
  reducers: {
    getCareers() {},
    setCareers(state, action) {
      return { ...state, error: null, careers: action.payload };
    },
    getCareer() {},
    setCareer(state, action) {
      return { ...state, error: null, career: action.payload };
    },
    setError(state, action) {
      return { ...state, error: action.payload };
    },
  },
});

export const { getCareers, setCareers, getCareer, setCareer, setError } =
  careersSlice.actions;
export default careersSlice.reducer;

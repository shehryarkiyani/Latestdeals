import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "EN",
  languages: ["EN","AR"],
};

export const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage } = langSlice.actions;

export default langSlice.reducer;

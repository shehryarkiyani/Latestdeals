import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setsearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setsearch } = SearchSlice.actions;

export default SearchSlice.reducer;

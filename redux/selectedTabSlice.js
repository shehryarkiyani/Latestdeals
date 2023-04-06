import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Home",
};

export const selectedTabSlice = createSlice({
  name: "selectedTab",
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedTab } = selectedTabSlice.actions;

export default selectedTabSlice.reducer;

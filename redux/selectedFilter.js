import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Active",
};

export const selectedFilterSlice = createSlice({
  name: "selectedFilter",
  initialState,
  reducers: {
    setselectedFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setselectedFilter } = selectedFilterSlice.actions;

export default selectedFilterSlice.reducer;

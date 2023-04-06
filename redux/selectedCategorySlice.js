import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "All",
  categories: [],
};

export const selectedCategorySlice = createSlice({
  name: "selectedCategory",
  initialState,
  reducers: {
    setselectedCategory: (state, action) => {
      state.value = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setselectedCategory, setCategories } = selectedCategorySlice.actions;

export default selectedCategorySlice.reducer;

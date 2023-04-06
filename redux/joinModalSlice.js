import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  formType: "signup",
};

export const joinModalSlice = createSlice({
  name: "showJoinModal",
  initialState,
  reducers: {
    setShowJoinModal: (state, action) => {
      state.value = action.payload;
    },
    setFormType: (state, action) => {
      state.formType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowJoinModal, setFormType } = joinModalSlice.actions;

export default joinModalSlice.reducer;

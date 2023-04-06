import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [],
  deals: [],
  vouchers: [],
  likedDeals:[],
  likedVouchers:[],
  savedDeals:[],
  savedVouchers:[],
  sharedDeals:[],
  sharedVouchers:[]

};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
    setDeals: (state, action) => {
      state.deals = action.payload;
    },
    setVouchers: (state, action) => {
      state.vouchers = action.payload;
    },
    setLikedDeals:(state,action)=>{
      state.likedDeals=action.payload
    },
    setlikedVouchers:(state,action)=>{
state.likedVouchers=action.payload
    },
    setSavedDeals:(state,action)=>{
      state.savedDeals=action.payload
    },
    setSavedVouchers:(state,action)=>{
      state.savedVouchers=action.payload
    },
    setSharedDeals:(state,action)=>{
      state.sharedDeals=action.payload
    },
    setSharedVouchers:(state,action)=>{
      state.sharedVouchers=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setOffers, setDeals, setVouchers,setLikedDeals,setlikedVouchers,setSavedDeals,setSavedVouchers,setSharedDeals,setSharedVouchers } = offersSlice.actions;

export default offersSlice.reducer;

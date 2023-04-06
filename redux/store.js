import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import selectedTabReducer from "./selectedTabSlice";
import selectedCategoryReducer from "./selectedCategorySlice";
import authReducer from "./auth/authSlice";
import offerReducer from "./offersSlice";
import joinModalReducer from "./joinModalSlice";
import langReducer from "./langSlice";
import selectedFilter from "./selectedFilter";
import SearchOffers from "./SearchOffers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  selectedTab: selectedTabReducer,
  selectedCategory: selectedCategoryReducer,
  selectedFilter:selectedFilter,
  auth: authReducer,
  offers: offerReducer,
  showJoinModal: joinModalReducer,
  language: langReducer,
  SearchOffers:SearchOffers
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({reducer: persistedReducer, middleware: getDefaultMiddleware()});

export const persistor = persistStore(store);

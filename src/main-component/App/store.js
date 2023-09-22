import { configureStore } from "@reduxjs/toolkit";
import pricingReducer from "../CreateSlice/pricingSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};
const persistedReducer = persistReducer(persistConfig, pricingReducer);
export const store = configureStore({
  reducer: {
    pricing: persistedReducer,
  },
});

export const persistor = persistStore(store);

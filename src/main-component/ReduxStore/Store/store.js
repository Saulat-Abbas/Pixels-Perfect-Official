import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"; 
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pricingReducer from "../Slices/pricingSlice"; 
import formDataReducer from "../Slices/formDataSlice";

// Persist configuration for pricing slice
const pricingPersistConfig = {
  key: "pricing-persist-key",
  storage,
};

// Persist configuration for formData slice
const formDataPersistConfig = {
  key: "form-data-persist-key",
  storage,
};

// Create persisted reducers for both slices
const persistedPricingReducer = persistReducer(
  pricingPersistConfig,
  pricingReducer
);

const persistedFormDataReducer = persistReducer(
  formDataPersistConfig,
  formDataReducer
);


const rootReducer = combineReducers({
  pricing: persistedPricingReducer,
  formData: persistedFormDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
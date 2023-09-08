import { configureStore } from "@reduxjs/toolkit";
import pricingReducer from '../CreateSlice/pricingSlice'

export const store = configureStore({
  reducer: {
    pricing: pricingReducer,
  },
});
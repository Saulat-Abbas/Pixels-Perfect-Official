import { configureStore } from "@reduxjs/toolkit";
import pricingReducer, { updatePricingCart } from "./pricingSlice";

export const store = configureStore({
  reducer: {
    pricing: pricingReducer,
  },
});
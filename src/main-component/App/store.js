import { configureStore } from "@reduxjs/toolkit";
import  updatePricingCart  from '../CreateSlice/pricingSlice'

export const store = configureStore({
  reducer: {
    pricing: updatePricingCart,
  },
});
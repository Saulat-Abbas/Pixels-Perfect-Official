import { createSlice } from "@reduxjs/toolkit";

const pricingSlice = createSlice({
  name: "pricing",
  initialState: {
    pricingData: {
      quantity: 1,
      fastDelivery: false,
      totalPrice: 0,
    },
  },
  reducers: {
    updatePricingCart: (state, action) => { 
      state.pricingData = action.payload;
    },
  },
});

export const { updatePricingCart } = pricingSlice.actions;

export default pricingSlice.reducer;

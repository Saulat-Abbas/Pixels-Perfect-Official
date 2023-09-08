import { createSlice } from '@reduxjs/toolkit';

const pricingSlice = createSlice({
  name: 'pricing',
  initialState: {
    imageQuantity: 1,
    isCheckboxChecked: false,
  },
  reducers: {
    setImageQuantity: (state, action) => {
      state.imageQuantity = action.payload;
    },
    setIsCheckboxChecked: (state, action) => {
      state.isCheckboxChecked = action.payload;
    },
  },
});

export const {
  setImageQuantity,
  setIsCheckboxChecked,
} = pricingSlice.actions;

export default pricingSlice.reducer;

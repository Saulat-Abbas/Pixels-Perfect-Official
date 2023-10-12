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
// const formDataSlice = createSlice({
//   name: "formData",
//   initialState: {
//     fullName: "",
//     Email: "",
//     CompanyName: "",
//     country: "United States",
//     state: "",
//     city: "",
//     zip: "",
//   },
//   reducers: {
//     updateFormData: (state, action) => {
//       return { ...state, ...action.payload };
//     },
//   },
// });

export const { updatePricingCart } = pricingSlice.actions;
// export const { updateFormData } = formDataSlice.actions;

export default pricingSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "formData",
  initialState: {
    fullName: "",
    Email: "",
    CompanyName: "",
    country: "United States",
    state: "",
    city: "",
    zip: "",
  },
  reducers: {
    updateFormData: (state, action) => {
      console.log("action", action);
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFormData } = formDataSlice.actions;

export default formDataSlice.reducer;

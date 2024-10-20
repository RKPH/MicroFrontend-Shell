// src/store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount: (state) => {
      state.count += 1; // This mutates the state directly
      console.log("Increasing count:", state.count);
    },
  },
});

export const { increaseCount } = counterSlice.actions;
export default counterSlice.reducer;

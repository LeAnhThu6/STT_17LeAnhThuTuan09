import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
  name: "abc",
  initialState: {
    result: 0,
  },

  reducers: {
    cong: (state, action) => {
      state.result += action.payload;
    },
    tru: (state, action) => {
      state.result -= action.payload;
    },
    nhan: (state, action) => {
      state.result *= action.payload;
    },
    chia: (state, action) => {
      state.result /= action.payload;
    },
  },
});

export const { cong, tru, nhan, chia } = Reducer.actions;

export default Reducer.reducer;

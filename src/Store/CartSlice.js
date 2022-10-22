import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { add, remove } = actions;

export default reducer;

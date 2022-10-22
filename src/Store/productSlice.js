import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  //   reducers: {
  //     setProductLoading(state) {
  //       state.status = STATUSES.LOADING;
  //     },
  //     setProduct(state, action) {
  //       state.data = action.payload;
  //       state.status = STATUSES.IDLE;
  //     },
  //     setProductError(state, action) {
  //       state.data = [];
  //       state.status = STATUSES.ERROR;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.data = [];
    });
  },
});

const { actions, reducer } = productSlice;

export const { setProduct, setProductLoading, setProductError } = actions;

export default reducer;

///THUNK

export const fetchProduct = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

// export const fetchProduct = () => {
//   return async (dispatch, getState) => {
//     try {
//       dispatch(setProductLoading());
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       console.log("data", data);
//       dispatch(setProduct(data));
//     } catch (error) {
//       console.log(error);
//       dispatch(setProductError());
//     }
//   };
// };

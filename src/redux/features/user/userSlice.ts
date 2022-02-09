import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces";
import { createUSer } from "./services";

const initialState: IInitialState = {
  isLogin: localStorage.getItem("access")!!,
  loading: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(createUSer.pending, (state) => {
      state.loading = true;
    });
    addCase(createUSer.fulfilled, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interface";
import { getAllYearsFromUser } from "./services";

const initialState: IInitialState = {
  userYears: [],
  loadingYears: false,
};

export const savingSlice = createSlice({
  name: "savingSlice",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAllYearsFromUser.pending, (state) => {
      state.loadingYears = true;
    });
    addCase(getAllYearsFromUser.fulfilled, (state) => {
      state.loadingYears = false;
    });
  },
});

export default savingSlice.reducer;

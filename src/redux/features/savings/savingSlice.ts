import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interface";
import { createNewSaving, deleteSaving, getAllYearsFromUser } from "./services";

const initialState: IInitialState = {
  userYears: [],
  loadingYears: false,
  loadingCreate: false,
};

export const savingSlice = createSlice({
  name: "savingSlice",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAllYearsFromUser.pending, (state) => {
      state.loadingYears = true;
    });
    addCase(getAllYearsFromUser.fulfilled, (state, { payload }) => {
      state.loadingYears = false;
      console.log(payload);
      state.userYears = payload!.years;
    });
    addCase(createNewSaving.pending, (state) => {
      state.loadingCreate = true;
    });
    addCase(createNewSaving.fulfilled, (state, { payload }) => {
      state.loadingCreate = false;
    });
    addCase(deleteSaving.fulfilled, (state, { payload }) => {
      state.userYears.filter((saving) => saving.id !== payload!.id);
    });
  },
});

export default savingSlice.reducer;

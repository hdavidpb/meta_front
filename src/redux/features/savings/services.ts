import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../services";

export const getAllYearsFromUser = createAsyncThunk(
  "create-new-user",
  async () => {
    try {
      const res = await rest.get(`${process.env.REACT_APP_META}/saving/years`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

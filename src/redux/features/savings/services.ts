import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICreateDataSend } from "../../../interfaces";
import { rest } from "../../../services";
import { ICreateSavingResponse } from "./interface";

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

export const crerNewSaving = createAsyncThunk(
  "create-new-user",
  async (data: ICreateDataSend) => {
    try {
      const res = await rest.post<ICreateSavingResponse>(
        `${process.env.REACT_APP_META}/saving/create`,
        data
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

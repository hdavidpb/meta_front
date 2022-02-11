import { createAsyncThunk } from "@reduxjs/toolkit";
import { successNotify } from "../../../alerts/alerts";
import { ICreateDataSend } from "../../../interfaces";
import { rest } from "../../../services";
import { ICreateSavingResponse, ISavingResponse } from "./interface";

export const getAllYearsFromUser = createAsyncThunk(
  "get-all-savings",
  async () => {
    try {
      const res = await rest.get<ISavingResponse>(
        `${process.env.REACT_APP_META}/saving/years`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createNewSaving = createAsyncThunk(
  "create-new-user",
  async (data: ICreateDataSend) => {
    try {
      const res = await rest.post<ICreateSavingResponse>(
        `${process.env.REACT_APP_META}/saving/create`,
        data
      );
      console.log(res.data);
      successNotify("Ahorro programado con exito!");
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

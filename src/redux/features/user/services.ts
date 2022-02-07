import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { successNotify } from "../../../alerts/alerts";

export interface IUserRegister {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export const createUSer = createAsyncThunk(
  "create-new-user",
  async (data: IUserRegister) => {
    try {
      const res = axios.post(`${process.env.REACT_APP_API}/register`, data);
      console.log((await res).data);
      successNotify("Usuario creado con exito!");
    } catch (error) {
      console.log(error);
    }
  }
);

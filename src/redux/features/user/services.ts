import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { errorNotify, successNotify } from "../../../alerts/alerts";
import { ILoginResponse, IUserLogin, IUserRegister } from "./interfaces";

export const createUSer = createAsyncThunk(
  "create-new-user",
  async (data: IUserRegister) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_META}/auth/register`,
        data
      );
      console.log(res.data);
      successNotify("Usuario creado con exito!");
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const login = createAsyncThunk(
  "logij-meta",
  async (data: IUserLogin) => {
    try {
      const res = await axios.post<ILoginResponse>(
        `${process.env.REACT_APP_META}/auth/login`,
        data
      );
      console.log(res.data);
      localStorage.setItem("access", JSON.stringify(res.data.access_token));
      successNotify("Bienvenid@!");
      return res.data;
    } catch (error: any) {
      console.log(error);
      if (error.response.data.message === "invalid credentials") {
        errorNotify("Usuario o contraseña invalido");
        return error.response.data.message;
      }
    }
  }
);

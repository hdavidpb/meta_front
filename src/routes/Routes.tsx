import React from "react";
import Login from "../pages/login/Login";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Home from "../pages/home/Home";
import CreateSaving from "../pages/createSaving/CreateSaving";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    { path: "login", element: <Login /> },
    { path: "create-saving", element: <CreateSaving /> },
    { path: "*", element: <h1>Not found</h1> },
  ];
  let element = useRoutes(routes);
  return element;
};

export default Routes;

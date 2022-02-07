import React from "react";
import Login from "../pages/login/Login";
import { useRoutes } from "react-router-dom";

const Routes = () => {
  const routes = [
    { path: "/", element: <h1>Home</h1> },
    { path: "login", element: <Login /> },
    { path: "register", element: <h1>Register</h1> },
  ];
  let element = useRoutes(routes);
  return element;
};

export default Routes;

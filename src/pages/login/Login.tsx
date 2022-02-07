import React, { useState } from "react";

import LoginForm from "./LoginForm";
import Register from "./Register";
import bg from "../../assets/images/bg.jpg";
import * as sc from "./style";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const handleChangeForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <sc.LoginContainer>
      <sc.LoginBoxContainer>
        <sc.BackgroundHeader src={bg}></sc.BackgroundHeader>
        {isLoginForm ? (
          <LoginForm action={handleChangeForm} />
        ) : (
          <Register action={handleChangeForm} />
        )}
      </sc.LoginBoxContainer>
    </sc.LoginContainer>
  );
};

export default Login;

import React, { useEffect } from "react";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";

import { ViewContainer } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { isLogin } = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <ViewContainer>
      <Routes />
      <Toaster />
    </ViewContainer>
  );
};

export default App;

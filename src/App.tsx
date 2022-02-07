import React from "react";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";

import { ViewContainer } from "./style";

const App = () => {
  return (
    <ViewContainer>
      <Routes />
      <Toaster />
    </ViewContainer>
  );
};

export default App;

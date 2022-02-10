import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BiExit } from "react-icons/bi";
import { BsPiggyBankFill } from "react-icons/bs";
import * as sc from "./styles";
const Sidebar = () => {
  const { isLogin } = useSelector((store: RootState) => store.user);
  const [closeSidebar, setCloseSidebar] = useState(true);
  return (
    <sc.SidebarContainer close={closeSidebar}>
      {isLogin && (
        <sc.ButtonSlideOpen
          onClick={() => setCloseSidebar(!closeSidebar)}
        ></sc.ButtonSlideOpen>
      )}

      <sc.OptionContainer>
        <BsPiggyBankFill color="#FFFFFF" size={18} />
        <p>Crear ahorro</p>
      </sc.OptionContainer>
      <sc.OptionFooterContainer>
        <BiExit color="#FFFFFF" size={18} />
        <p>Salir</p>
      </sc.OptionFooterContainer>
    </sc.SidebarContainer>
  );
};

export default Sidebar;

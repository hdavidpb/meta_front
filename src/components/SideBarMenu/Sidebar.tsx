import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BiExit } from "react-icons/bi";
import { BsPiggyBankFill } from "react-icons/bs";
import * as sc from "./styles";
import { MdMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
const Sidebar = () => {
  const { isLogin } = useSelector((store: RootState) => store.user);

  const [closeSidebar, setCloseSidebar] = useState(true);
  return (
    <sc.SidebarContainer close={closeSidebar}>
      {isLogin && (
        <sc.ButtonSlideOpen onClick={() => setCloseSidebar(!closeSidebar)}>
          <MdMenuOpen color="#FFFFFF" />
        </sc.ButtonSlideOpen>
      )}
      <NavLink
        onClick={() => setCloseSidebar(true)}
        to={"/"}
        className={({ isActive }) =>
          isActive ? "link_action active_link" : "link_action"
        }
      >
        <AiFillHome color="#FFFFFF" size={18} />
        <p> Home</p>
      </NavLink>
      <NavLink
        onClick={() => setCloseSidebar(true)}
        to={"/create-saving"}
        className={({ isActive }) =>
          isActive ? "link_action active_link" : "link_action"
        }
      >
        <BsPiggyBankFill color="#FFFFFF" size={18} />
        <p> Crear ahorro</p>
      </NavLink>

      <sc.OptionFooterContainer>
        <BiExit color="#FFFFFF" size={18} />
        <p>Salir</p>
      </sc.OptionFooterContainer>
    </sc.SidebarContainer>
  );
};

export default Sidebar;

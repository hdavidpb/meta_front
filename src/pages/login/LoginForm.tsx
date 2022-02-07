import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePassword } from "react-icons/md";
import { IForms } from "../../interfaces";
import * as sc from "./style";
const LoginForm = ({ action }: IForms) => {
  return (
    <sc.FormContainer>
      <sc.FieldsContainer>
        <sc.IconContainer>
          <AiOutlineUser color="#5b4f7c" size={18} />
        </sc.IconContainer>
        <input type="text" placeholder="Usuario" />
      </sc.FieldsContainer>
      <sc.FieldsContainer>
        <sc.IconContainer>
          <MdOutlinePassword color="#5b4f7c" size={18} />
        </sc.IconContainer>
        <input type="password" placeholder="Contraseña" />
      </sc.FieldsContainer>
      <sc.Button bg="#5b4f7c" color="#FFFFFF">
        Iniciar sessión
      </sc.Button>
      <sc.LinkChange onClick={() => action()}>Registrate</sc.LinkChange>
    </sc.FormContainer>
  );
};

export default LoginForm;

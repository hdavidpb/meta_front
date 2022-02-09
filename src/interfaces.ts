export interface IForms {
  action: () => void;
}
export interface IRegisterData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  repetPassword: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

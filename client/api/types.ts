import { FieldError, UseFormRegister } from "react-hook-form";

export interface RegistrationFormState {
  email: string;
  password: string;
  name?: string;
}

export interface LoginFormState {
  email: string;
  password: string;
}


export interface InputsProps {
  error?: FieldError | undefined;
  type: "name" | "email" | "password";
  placeholder: string;
  register: UseFormRegister<RegistrationFormState>;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  friends: string[];
  deedList: string[];
  rate: number;
}

export interface Error {
  message: string
}

export interface LoginData {
  status: number
  result: User | Error
}

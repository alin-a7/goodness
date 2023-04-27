import { FieldError, UseFormRegister } from "react-hook-form"

export interface RegistrationFormState {
    email: string;
    password: string;
    name?: string;
  }
  
export interface InputsProps {
    error?: FieldError | undefined
    type: "name" | "email" | "password"
    placeholder: string
    register: UseFormRegister<RegistrationFormState>
  }
  
import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { RegistrationFormState } from "@/store/types";

import styles from "./FormInput.module.scss";

export interface InputsProps {
  error?: FieldError | undefined;
  type: "name" | "email" | "password";
  placeholder: string;
  register: UseFormRegister<RegistrationFormState>;
}


const FormInput: FC<InputsProps> = ({ error, register, type, placeholder }) => {
  return (
    <>
      <input
        {...register(`${type}`, {
          required: "The field is required",
        })}
        type={type}
        className={styles.textInput}
        placeholder={placeholder}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </>
  );
};

export default FormInput;

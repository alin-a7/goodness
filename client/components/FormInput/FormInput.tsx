import { FC } from "react";

import { InputsProps } from "@/api";

import styles from "./FormInput.module.scss";

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

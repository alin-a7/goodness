import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useCreateTodoMutation } from "@/store/api/userApi";

import styles from "./CreateForm.module.scss";

export interface Dto {
  id: string;
  text: string;
}

interface CreateFormProps {
  dto: Dto;
}

const CreateForm = ({ dto }: CreateFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ text: string }>({
    mode: "onSubmit",
  });
  const [createTodo] = useCreateTodoMutation();

  const formSubmit = async (data: { text: string }) => {
    const newDto = {...dto, text: data.text}
    await createTodo(newDto)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <h2 className={styles.title}>Create a new TODO!</h2>
      <textarea
        className={styles.textarea}
        {...register("text", { required: "The field is required" })}
      ></textarea>
      {errors.text && <div className={styles.error}>{errors.text.message}</div>}

      <button type="submit" className={styles.button}>
        Submit!
      </button>
    </form>
  );
};

export default CreateForm;

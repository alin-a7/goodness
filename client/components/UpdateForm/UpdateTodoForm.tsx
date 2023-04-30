import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  useUpdateTodoMutation,
} from "@/store/api/userApi";

import styles from "./UpdateForm.module.scss";

export interface TodoDto {
  id: string;
  text: string;
  isDone: boolean;
}

interface CreateFormProps {
  dto: TodoDto;
  closeModal: () => void;
}

export const UpdateTodoForm = ({ dto, closeModal }: CreateFormProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<{ text: string }>({
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("text", dto.text);
  }, []);

  const [updateTodo] = useUpdateTodoMutation();

  const formSubmit = async (data: { text: string }) => {
    const newDto = { ...dto, text: data.text };
    await updateTodo(newDto);
    closeModal();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <h2 className={styles.title}>Change your TODO!</h2>
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


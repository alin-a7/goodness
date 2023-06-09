import { useForm } from "react-hook-form";

import { useCreateTodoMutation } from "@/store/api/appApi";

import styles from "./CreateTodoForm.module.scss";

export interface Dto {
  id: string;
  text: string;
}

interface CreateFormProps {
  dto: Dto;
}

const CreateTodoForm = ({ dto }: CreateFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{ text: string }>({
    mode: "onSubmit",
  });
  const [createTodo] = useCreateTodoMutation();

  const formSubmit = async (data: { text: string }) => {
    const newDto = {...dto, text: data.text}
    await createTodo(newDto)
    reset()
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

export default CreateTodoForm;

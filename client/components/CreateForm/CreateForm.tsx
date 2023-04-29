import { useEffect } from "react";
import { useForm } from "react-hook-form";

import styles from "./CreateForm.module.scss";

export interface Dto {
  id: string;
  text: string;
  name?: string;
}

interface CreateFormProps {
  title: string;
  dto: Dto;
  fn: (arg: any) => any;
}

const CreateForm = ({ title, dto, fn }: CreateFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ text: string }>({
    mode: "onBlur",
  });

  useEffect(() => {
    setValue("text", dto.text);
  }, [setValue]);

  const formSubmit = async (data: { text: string }) => {
    const newDto = {...dto, text: data.text}
    await fn(newDto)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <h2 className={styles.title}>{title}</h2>
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

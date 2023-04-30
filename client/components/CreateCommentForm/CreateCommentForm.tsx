import { useForm } from "react-hook-form";

import { useCreateCommentMutation } from "@/store/api/appApi";
import { CreateCommentDto } from "@/store/types";

import styles from "./CreateCommentForm.module.scss";

const CreateCommentForm = ({ dto }: { dto: CreateCommentDto }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{ text: string }>({
    mode: "onSubmit",
  });

  const [createComment] = useCreateCommentMutation();

  const formSubmit = async (data: { text: string }) => {
    const newDto = { ...dto, text: data.text };
    await createComment(newDto);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <textarea
        placeholder="Comments"
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

export default CreateCommentForm;

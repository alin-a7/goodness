import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useUpdateUserMutation } from "@/store/api/userApi";

import styles from "./UpdateForm.module.scss";

export interface UserDto {
  id: string;
  name: string;
}

interface CreateFormProps {
  dto: UserDto;
  closeModal: () => void;
}

export const UpdateUserForm = ({ dto, closeModal }: CreateFormProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string }>({
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("name", dto.name);
  }, []);

  const [updateUser] = useUpdateUserMutation();

  const formSubmit = async (data: { name: string }) => {
    const newDto = { ...dto, name: data.name };
    await updateUser(newDto);
    closeModal()
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <h2 className={styles.title}>Change your name!</h2>
      <textarea
        className={styles.textarea}
        {...register("name", { required: "The field is required" })}
      ></textarea>
      {errors.name && <div className={styles.error}>{errors.name.message}</div>}

      <button type="submit" className={styles.button}>
        Submit!
      </button>
    </form>
  );
};

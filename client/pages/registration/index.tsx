import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

import FormInput from "@/components/FormInput";
import Layout from "@/components/Layout";
import { RegistrationFormState, User } from "@/store/types/user";
import { useCreateUserMutation } from "@/store/api/userApi";
import { useActions } from "@/store/hooks";

import styles from "./Registration.module.scss";

const Registration = () => {
  const { setCurrentUser } = useActions();
  setCurrentUser({} as User);
  const [registrationError, setRegistrationError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormState>({
    mode: "onBlur",
  });

  const [createUser] = useCreateUserMutation();
  const { push } = useRouter();

  const formSubmit = async (data: RegistrationFormState) => {
    const result = await createUser(data);
    if ("error" in result) {
      setRegistrationError("A user with this email exists");
    } else {
      setCurrentUser(result.data);
      push("/");
    }
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>Register</h1>
        <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
          <FormInput
            register={register}
            error={errors?.name}
            type="name"
            placeholder="Enter your first and last name"
          />
          <FormInput
            register={register}
            error={errors?.email}
            type="email"
            placeholder="Enter your email"
          />
          <FormInput
            register={register}
            error={errors?.password}
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit" className={styles.button}>
            Submit!
          </button>
        </form>
        {registrationError && <div>{registrationError}</div>}

        <h2>
          or <Link href="/login"> Log in</Link>
        </h2>
      </div>
    </Layout>
  );
};

export default Registration;

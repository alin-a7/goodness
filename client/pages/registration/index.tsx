import Link from "next/link";
import { useForm } from "react-hook-form";

import FormInput from "@/components/FormInput/FormInput";
import Layout from "@/components/Layout";
import { RegistrationFormState } from "@/types/component";

import styles from "./Registration.module.scss";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormState>({
    mode: "onBlur",
  });

  const formSubmit = (data: RegistrationFormState) => {
    console.log(data);

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
        </form>
        <button type="submit" className={styles.button}>
          Submit!
        </button>

        <h2>
          or <Link href="/login"> Log in</Link>
        </h2>
      </div>
    </Layout>
  );
};

export default Registration;

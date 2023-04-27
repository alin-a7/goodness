import Link from "next/link";
import { useForm } from "react-hook-form";

import FormInput from "@/components/FormInput/FormInput";
import Layout from "@/components/Layout";

import styles from "./Login.module.scss";

export interface LoginFormState {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormState>({
    mode: "onBlur",
  });

  const formSubmit = (data: LoginFormState) => {
    console.log(data);
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>Log In</h1>
        <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
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
      </div>
    </Layout>
  );
};

export default Login;

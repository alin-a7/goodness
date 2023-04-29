import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

import FormInput from "@/components/FormInput";
import Layout from "@/components/Layout";

import { LoginFormState } from "@/store/types/user";
import { useLoginUserMutation } from "@/store/api/userApi";
import { useActions } from "@/store/hooks";

import styles from "./Login.module.scss";

const Login = () => {
  const { push } = useRouter();
  const { setCurrentUser } = useActions();
  const [loginError, setLoginError] = useState("");

  const [loginUser] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormState>({
    mode: "onBlur",
  });

  const formSubmit = async (data: LoginFormState) => {
    const result = await loginUser(data);
    if ("error" in result) {
      setLoginError("Incorrect email or password");
    } else {
      setCurrentUser(result.data)
      push("/");
    }
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
          <button type="submit" className={styles.button}>
            Submit!
          </button>
        </form>
        {loginError && <div>{loginError}</div>}

        <h2>
          or <Link href="/registration">Sing Up</Link>
        </h2>
      </div>
    </Layout>
  );
};

export default Login;

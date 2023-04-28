import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import FormInput from "@/components/FormInput";
import Layout from "@/components/Layout";
import { Error, LoginFormState, User, loginUser } from "@/api";

import styles from "./Login.module.scss";

const Login = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormState>({
    mode: "onBlur",
  });

  const formSubmit = async (data: LoginFormState) => {
    const { status, result } = await loginUser(data);
    if (status === 201) {
      console.log((result as User)._id);
      push("/");
    } else {
      console.log((result as Error).message);
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
      </div>
    </Layout>
  );
};

export default Login;

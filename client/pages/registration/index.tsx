import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import FormInput from "@/components/FormInput";
import Layout from "@/components/Layout";
import { RegistrationFormState, createUser } from "@/api";

import styles from "./Registration.module.scss";

const Registration = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormState>({
    mode: "onBlur",
  });

  const formSubmit = async (data: RegistrationFormState) => {
    const user = await createUser(data)
    console.log(user._id);
    push("/");
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

        <h2>
          or <Link href="/login"> Log in</Link>
        </h2>
      </div>
    </Layout>
  );
};

export default Registration;

import { LoginData, LoginFormState, RegistrationFormState, User } from "./types";

const BASE_URL = "http://localhost:5000";

const USERS_URL = `${BASE_URL}/user`;
const LOGIN_URL = `${BASE_URL}/auth/login`;
const REGISTRATION_URL = `${BASE_URL}/auth/registration`;

export const createUser = async (
  user: RegistrationFormState
): Promise<User> => {
  try {
    const data = await fetch(REGISTRATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await data.json() as User;
    return result;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const loginUser = async (user: LoginFormState): Promise<LoginData> => {
  try {
    const data = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await data.json();
    return { result: result, status: data.status };
  } catch (error) {
    throw new Error(`${error}`);
  }
};

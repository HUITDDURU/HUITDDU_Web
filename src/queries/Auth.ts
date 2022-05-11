import { useMutation } from "react-query";
import { login } from "../api/Auth";

interface LoginInput {
  email: string;
  password: string;
}

const useLogin = () => {
  return useMutation(({ email, password }: LoginInput) =>
    login(email, password)
  );
};

export { useLogin };

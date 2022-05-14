import { useMutation } from "react-query";
import { login, signUp } from "../api/Auth";
import { LoginInput, RegisterInput } from "./interface";

const useLogin = () => {
  return useMutation((input: LoginInput) => {
    const { email, password } = input;
    return login(email, password);
  });
};

const useRegister = () => {
  return useMutation((input: RegisterInput) => {
    const { email, imageUrl, intro, name, password } = input;
    return signUp(email, name, password, intro, imageUrl);
  });
};

export { useLogin, useRegister };

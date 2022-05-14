import { useMutation } from "react-query";
import {
  certificationEmailCode,
  login,
  postEmailCode,
  signUp,
} from "../../api/Auth";
import { CertificationCodeInput, LoginInput, RegisterInput } from "./interface";

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

const useEmail = () => {
  const postCode = useMutation((email: string) => postEmailCode(email));
  const certificationCode = useMutation((input: CertificationCodeInput) => {
    const { code, email } = input;
    return certificationEmailCode(email, code);
  });

  return { postCode, certificationCode };
};

export { useLogin, useRegister, useEmail };

import { createContext, Dispatch, SetStateAction } from "react";

export interface SignUpState {
  email: string;
  password: string;
  passwordConfirmation: string;
  certificationCode: string;
  nickname: string;
  intro: string;
  profilePicture: undefined | string;
  isEmailConfirmationed: boolean;
}

export const signUpInitalState: SignUpState = {
  email: "",
  certificationCode: "",
  intro: "",
  nickname: "",
  password: "",
  passwordConfirmation: "",
  profilePicture: undefined,
  isEmailConfirmationed: false,
};

export const signUpContext = createContext<
  [SignUpState, Dispatch<SetStateAction<SignUpState>>]
>([signUpInitalState, () => true]);

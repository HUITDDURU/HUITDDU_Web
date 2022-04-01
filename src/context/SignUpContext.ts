import { createContext } from "react";
import State from "../interface/State";

export interface SignUpContextType {
  email: string;
  password: string;
  nickname: string;
  oneLineInfo: string;
  isEmailAuthenticated: boolean;
}

export const SignUpContext = createContext<State<SignUpContextType | null>>([
  null,
  () => null,
]);

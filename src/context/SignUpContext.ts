import { createContext } from "react";

export interface SignUpContextType {
  email: string;
  password: string;
  nickname: string;
  oneLineInfo: string;
  isEmailAuthenticated: boolean;
}

export const SignUpContext = createContext<SignUpContextType | null>(null);

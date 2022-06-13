import { FC, useState } from "react";
import { signUpContext, signUpInitalState, SignUpState } from "../context";

const SignUpProvider: FC = ({ children }) => {
  const state = useState<SignUpState>(signUpInitalState);

  return (
    <signUpContext.Provider value={state}>{children}</signUpContext.Provider>
  );
};

export default SignUpProvider;

import { FC, useState } from "react";
import { SignUpContext, SignUpContextType } from "../../context/SignUpContext";

const SignUpProvider: FC = ({ children }) => {
  const [context, setContext] = useState<SignUpContextType | null>(null);

  return (
    <SignUpContext.Provider value={[context, setContext]}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpProvider;

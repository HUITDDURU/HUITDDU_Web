import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { SignUpContext } from "../context/SignUpContext";

const useSignUpContext = () => {
  const contextState = useContext(SignUpContext);
  const [context, setContext] = contextState;
  const router = useRouter();

  useEffect(() => {
    if (!context) {
      setContext({
        email: "",
        password: "",
        nickname: "",
        oneLineInfo: "",
        isEmailAuthenticated: false,
      });
      router.push("/login/signup/enterinfo");
    }
  }, [context, router, setContext]);

  return contextState;
};

export default useSignUpContext;

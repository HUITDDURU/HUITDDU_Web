import { useContext } from "react";
import { signUpContext } from "../context";

const useSignUpContext = () => useContext(signUpContext);

export default useSignUpContext;

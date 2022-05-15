import { atom } from "recoil";
import atomKeys from "../../constant/atomKeys";
import { SignUpState } from "./interface";

const initalState: SignUpState = {
  email: "",
  certificationCode: "",
  intro: "",
  nickname: "",
  password: "",
  passwordConfirmation: "",
  profilePicture: "",
  isEmailConfirmationed: false,
};

const signUpState = atom<SignUpState>({
  key: atomKeys.signUp,
  default: initalState,
});

export default signUpState;

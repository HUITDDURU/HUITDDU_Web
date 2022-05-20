interface SignUpState {
  email: string;
  password: string;
  passwordConfirmation: string;
  certificationCode: string;
  nickname: string;
  intro: string;
  profilePicture: undefined | string;
  isEmailConfirmationed: boolean;
}

export type { SignUpState };

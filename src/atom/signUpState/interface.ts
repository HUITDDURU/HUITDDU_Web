interface SignUpState {
  email: string;
  password: string;
  passwordConfirmation: string;
  certificationCode: string;
  nickname: string;
  intro: string;
  profilePicture: string;
  isEmailConfirmationed: boolean;
}

export type { SignUpState };

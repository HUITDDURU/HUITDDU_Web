interface LoginInput {
  email: string;
  password: string;
}

interface RegisterInput {
  email: string;
  name: string;
  password: string;
  intro: string;
  imageUrl: string;
}

interface CertificationCodeInput {
  email: string;
  code: string;
}

export type { LoginInput, RegisterInput, CertificationCodeInput };

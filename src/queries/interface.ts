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

export type { LoginInput, RegisterInput };

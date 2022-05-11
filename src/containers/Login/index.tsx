import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { memo, useMemo, useState } from "react";
import toast from "react-hot-toast";
import BorderButton from "../../components/Buttons/BorderButton";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import * as S from "./styles";

interface LoginInput {
  email: string;
  password: string;
}

const LoginContainer: NextPage = () => {
  const router = useRouter();
  const [{ email, password }, setLoginInput] = useState<LoginInput>({
    email: "",
    password: "",
  });
  const loginDisabled = useMemo(
    () => ![email, password].every((value) => value.trim().length > 0),
    [email, password]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const onSignUpClick = () => router.push("/login/signup/enterinfo");

  const checkValidity = () => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    return emailRegex.test(email);
  };

  const onLoginClick = () => {
    if (!checkValidity()) {
      toast.error("이메일 형식을 확인해주세요.");
    }
  };

  return (
    <div>
      <S.Title>로그인</S.Title>
      <S.InputContainer>
        <div>
          <S.Description>이메일</S.Description>
          <Input
            placeholder="이메일을 입력해주세요..."
            value={email}
            name="email"
            autoComplete="username"
            type="email"
            onChange={onChange}
          />
        </div>
        <div>
          <S.Description>비밀번호</S.Description>
          <Input
            placeholder="비밀번호를 입력해주세요..."
            value={password}
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={onChange}
          />
        </div>
      </S.InputContainer>
      <S.ButtonContainer>
        <BorderButton onClick={onSignUpClick}>회원가입</BorderButton>
        <Button disabled={loginDisabled} onClick={onLoginClick}>
          로그인
        </Button>
      </S.ButtonContainer>
    </div>
  );
};

export default memo(LoginContainer);

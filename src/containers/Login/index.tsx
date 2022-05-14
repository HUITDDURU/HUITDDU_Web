import axios from "axios";
import moment from "moment";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { memo, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import BorderButton from "../../components/Buttons/BorderButton";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import storageKeys from "../../constant/storageKeys";
import { useLogin } from "../../queries/Auth";
import * as S from "./styles";

interface LoginInput {
  email: string;
  password: string;
}

const LoginContainer: NextPage = () => {
  const router = useRouter();
  const loginMutation = useLogin();
  const [{ email, password }, setLoginInput] = useState<LoginInput>({
    email: "",
    password: "",
  });
  const loginDisabled = useMemo(
    () =>
      ![email, password].every((value) => value.trim().length > 0) ||
      loginMutation.isLoading,
    [email, loginMutation.isLoading, password]
  );
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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

  const onLoginClick = async () => {
    if (!checkValidity()) {
      toast.error("이메일 형식을 확인해주세요.");
      setLoginInput({ password: "", email: "" });
      emailRef.current?.focus();
      return;
    }

    try {
      const { data } = await loginMutation.mutateAsync({ email, password });
      const { accessToken, refreshToken } = data;
      const expiresAt = moment().add(30, "minute");

      localStorage.setItem(storageKeys.accessToken, accessToken);
      localStorage.setItem(storageKeys.refreshToken, refreshToken);
      localStorage.setItem(storageKeys.expiresAt, expiresAt.toISOString());
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        toast.error("로그인 실패. 다시 확인해주세요.");
        setLoginInput((prev) => ({ ...prev, password: "" }));
        passwordRef.current?.focus();
        return;
      }

      toast.error(`${error}`);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      onLoginClick();
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
            ref={emailRef}
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
            ref={passwordRef}
            onKeyDown={onKeyDown}
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

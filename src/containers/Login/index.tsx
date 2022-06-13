import axios from "axios";
import moment from "moment";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import BorderButton from "../../components/Buttons/BorderButton";
import Button from "../../components/Buttons/Button";
import FormInput, { FormInputRef } from "../../components/FormInput";
import storageKeys from "../../constant/storageKeys";
import { useLogin } from "../../queries/Auth";
import * as S from "./styles";
import cookie from "react-cookies";
import useSignUpContext from "../../hooks/useSignUpContext";
import { signUpInitalState } from "../../context";

interface LoginInput {
  email: string;
  password: string;
}
interface ErrorMessages {
  email?: string;
  password?: string;
}

const LoginContainer: NextPage = () => {
  const router = useRouter();
  const loginMutation = useLogin();
  const [{ email, password }, setLoginInput] = useState<LoginInput>({
    email: "",
    password: "",
  });
  const [, setSignUp] = useSignUpContext();

  const loginDisabled = useMemo(
    () =>
      ![email, password].every((value) => value.trim().length > 0) ||
      loginMutation.isLoading,
    [email, loginMutation.isLoading, password]
  );
  const emailRef = useRef<FormInputRef>(null);
  const passwordRef = useRef<FormInputRef>(null);

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

  const setError = ({ email, password }: ErrorMessages) => {
    if (email) {
      emailRef.current?.error(email);
    } else {
      emailRef.current?.error("");
    }

    if (password) {
      passwordRef.current?.error(password);
    } else {
      passwordRef.current?.error("");
    }
  };

  const onLoginClick = async () => {
    if (!checkValidity()) {
      setError({ email: "유효하지 않은 이메일입니다." });
      setLoginInput({ password: "", email: "" });
      emailRef.current?.ref.current?.focus();
      return;
    }

    try {
      setError({});
      const { data } = await loginMutation.mutateAsync({ email, password });
      const { accessToken, refreshToken } = data;
      const expiresAt = moment().add(30, "minute");

      localStorage.setItem(storageKeys.accessToken, accessToken);
      localStorage.setItem(storageKeys.refreshToken, refreshToken);
      localStorage.setItem(storageKeys.expiresAt, expiresAt.toISOString());
      const d = new Date();
      d.setFullYear(3000);
      cookie.save(storageKeys.accessToken, accessToken, {
        path: "/",
        expires: d,
      });
      cookie.save(storageKeys.refreshToken, refreshToken, {
        path: "/",
        expires: d,
      });
      cookie.save(storageKeys.expiresAt, expiresAt.toISOString(), {
        path: "/",
        expires: d,
      });

      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        toast.error("로그인 실패. 다시 확인해주세요.");
        setLoginInput((prev) => ({ ...prev, password: "" }));
        passwordRef.current?.ref.current?.focus();
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

  useEffect(() => {
    setSignUp(signUpInitalState);
  }, []);

  return (
    <div>
      <S.Title>로그인</S.Title>
      <S.InputContainer>
        <FormInput
          title="이메일"
          placeholder="이메일을 입력해주세요..."
          value={email}
          name="email"
          autoComplete="username"
          type="email"
          onChange={onChange}
          ref={emailRef}
        />
        <FormInput
          title="비밀번호"
          placeholder="비밀번호를 입력해주세요..."
          value={password}
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={onChange}
          ref={passwordRef}
          onKeyDown={onKeyDown}
        />
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

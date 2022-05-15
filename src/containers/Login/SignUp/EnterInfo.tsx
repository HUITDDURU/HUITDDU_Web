import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useRef } from "react";
import { useRecoilState } from "recoil";
import signUpState from "../../../atom/signUpState";
import Button from "../../../components/Buttons/Button";
import * as S from "../styles";
import FormInput, { FormInputRef } from "../../../components/FormInput";
import { useEmail } from "../../../queries/Auth";
import toast from "react-hot-toast";

interface ErrorMessages {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}

const EnterInfoContainer: NextPage = () => {
  const router = useRouter();
  const [signUp, setSignUp] = useRecoilState(signUpState);
  const { email, password, passwordConfirmation, isEmailConfirmationed } =
    signUp;
  const emailRef = useRef<FormInputRef>(null);
  const passwordRef = useRef<FormInputRef>(null);
  const passwordConfirmationRef = useRef<FormInputRef>(null);
  const { postCode } = useEmail();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  };

  const setError = ({
    email,
    password,
    passwordConfirmation,
  }: ErrorMessages) => {
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

    if (passwordConfirmation) {
      passwordConfirmationRef.current?.error(passwordConfirmation);
    } else {
      passwordConfirmationRef.current?.error("");
    }
  };

  const onNext = async () => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!emailRegex.test(email)) {
      setError({ email: "유효하지 않은 이메일입니다." });
      setSignUp((prev) => ({
        ...prev,
        email: "",
      }));
      emailRef.current?.ref.current?.focus();
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

    if (!passwordRegex.test(password)) {
      setError({ password: "유효하지 않은 비밀번호입니다." });
      setSignUp((prev) => ({
        ...prev,
        password: "",
        passwordConfirmation: "",
      }));
      passwordRef.current?.ref.current?.focus();
      return;
    }

    if (password !== passwordConfirmation) {
      setError({ passwordConfirmation: "비밀번호를 확인해주세요." });
      setSignUp((prev) => ({
        ...prev,
        password: "",
        passwordConfirmation: "",
      }));
      passwordConfirmationRef.current?.ref.current?.focus();
      return;
    }

    setError({});
    if (!isEmailConfirmationed) {
      try {
        await toast.promise(postCode.mutateAsync(email), {
          loading: "인증코드 전송중...",
          success: "인증코드 전송완료. 이메일을 확인해주세요.",
          error: "인증코드 전송 실패. 다시 시도해주세요.",
        });

        router.push("email");
      } catch (error) {}
    } else {
      router.push("profile");
    }
  };

  const nextDisabled =
    [email, password, passwordConfirmation].some(
      (value) => value.length <= 0
    ) || postCode.isLoading;

  return (
    <div>
      <S.Title>정보 입력</S.Title>
      <S.InputContainer>
        <FormInput
          ref={emailRef}
          title="이메일"
          placeholder="이메일을 입력해주세요..."
          name="email"
          autoComplete="username"
          type="email"
          onChange={onChange}
          value={email}
          disabled={isEmailConfirmationed}
        />
        <FormInput
          title="비밀번호"
          placeholder="비밀번호를 입력해주세요..."
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={onChange}
          value={password}
          ref={passwordRef}
          info={`비밀번호는 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자가 포함된 8 ~ 16자로 구성되어야 합니다.`}
        />
        <FormInput
          title="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요..."
          name="passwordConfirmation"
          type="password"
          autoComplete="current-password"
          onChange={onChange}
          value={passwordConfirmation}
          ref={passwordConfirmationRef}
        />
      </S.InputContainer>
      <S.BottomContainer>
        <S.ToLogin>
          <Link href="/login">로그인으로</Link>
        </S.ToLogin>
        <S.ButtonContainer>
          <S.Page>1 / 3</S.Page>
          <Button disabled={nextDisabled} onClick={onNext}>
            다음
          </Button>
        </S.ButtonContainer>
      </S.BottomContainer>
    </div>
  );
};

export default memo(EnterInfoContainer);

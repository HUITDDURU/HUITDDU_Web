import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import signUpState from "../../../atom/signUpState";
import Button from "../../../components/Buttons/Button";
import FormInput from "../../../components/FormInput";
import useRouterWithPageTransition from "../../../hooks/useRouterWithPageTransition";
import * as S from "../styles";

const EmailContainer: NextPage = () => {
  const router = useRouter();
  const [signUp, setSignUp] = useRecoilState(signUpState);
  const { email, certificationCode, isEmailConfirmationed } = signUp;
  const push = useRouterWithPageTransition();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignUp((prev) => ({ ...prev, certificationCode: e.target.value }));

  const isNextDisabled = certificationCode.length <= 0;

  const checkEmail = useCallback(async () => {
    if (email === "") {
      push("enterinfo", 500);
    }
  }, [email, push]);

  useEffect(() => {
    checkEmail();
  }, [checkEmail]);

  return (
    <div>
      <S.Title>이메일 인증</S.Title>
      <S.InputContainer>
        <FormInput
          title="이메일 인증 코드"
          value={certificationCode}
          disabled={isEmailConfirmationed}
          onChange={onChangeHandler}
          placeholder="이메일 인증 코드를 입력해주세요..."
        />
      </S.InputContainer>
      <S.BottomContainer>
        <S.ToLogin>
          <Link href="/login">로그인으로</Link>
        </S.ToLogin>
        <S.ButtonContainer>
          <S.Page>2 / 3</S.Page>
          <S.ToLogin>
            <Link href="/login/signup/enterinfo">이전</Link>
          </S.ToLogin>
          <Button
            disabled={isNextDisabled}
            onClick={() => router.push("profile")}
          >
            다음
          </Button>
        </S.ButtonContainer>
      </S.BottomContainer>
    </div>
  );
};

export default memo(EmailContainer);

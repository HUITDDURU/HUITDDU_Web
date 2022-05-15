import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useCallback, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import signUpState from "../../../atom/signUpState";
import Button from "../../../components/Buttons/Button";
import FormInput, { FormInputRef } from "../../../components/FormInput";
import useRouterWithPageTransition from "../../../hooks/useRouterWithPageTransition";
import { useEmail } from "../../../queries/Auth";
import * as S from "../styles";

const EmailContainer: NextPage = () => {
  const router = useRouter();
  const [signUp, setSignUp] = useRecoilState(signUpState);
  const { email, certificationCode, isEmailConfirmationed } = signUp;
  const push = useRouterWithPageTransition();
  const { certificationCode: codeCertification } = useEmail();
  const codeRef = useRef<FormInputRef>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignUp((prev) => ({ ...prev, certificationCode: e.target.value }));

  const isNextDisabled =
    certificationCode.length <= 0 || codeCertification.isLoading;

  const checkEmail = useCallback(async () => {
    if (email === "") {
      await push("enterinfo", 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const onNextClick = async () => {
    if (certificationCode.trim() === "") {
      codeRef.current?.error("인증코드를 입력해주세요.");
      return;
    }

    codeRef.current?.error("");
    try {
      await toast.promise(
        codeCertification.mutateAsync({ email, code: certificationCode }),
        { loading: "인증중...", success: "인증 완료", error: "인증 실패" }
      );

      await router.push("profile");
      setSignUp((prev) => ({ ...prev, isEmailConfirmationed: true }));
    } catch (error) {
      codeRef.current?.error("인증코드가 틀렸습니다. 다시 확인해주세요.");
      codeRef.current?.ref.current?.focus();
      setSignUp((prev) => ({ ...prev, certificationCode: "" }));
    }
  };

  useEffect(() => {
    checkEmail();
  }, [checkEmail]);

  return (
    <div>
      <S.Title>이메일 인증</S.Title>
      <S.InputContainer>
        <FormInput
          ref={codeRef}
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
          <Button disabled={isNextDisabled} onClick={onNextClick}>
            {isEmailConfirmationed ? "다음" : "인증"}
          </Button>
        </S.ButtonContainer>
      </S.BottomContainer>
    </div>
  );
};

export default memo(EmailContainer);

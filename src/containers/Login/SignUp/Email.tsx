import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import Button from "../../../components/Buttons/Button";
import Input from "../../../components/Input";
import * as S from "../styles";

const EmailContainer: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <S.Title>이메일 인증</S.Title>
      <S.InputContainer>
        <div>
          <S.Description>이메일 인증 코드</S.Description>
          <Input placeholder="이메일 인증 코드를 입력해주세요..." />
        </div>
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
          <Button onClick={() => router.push("profile")}>다음</Button>
        </S.ButtonContainer>
      </S.BottomContainer>
    </div>
  );
};

export default memo(EmailContainer);

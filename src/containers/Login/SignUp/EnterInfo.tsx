import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import Button from "../../../components/Buttons/Button";
import Input from "../../../components/Input";
import * as S from "../styles";

const EnterInfoContainer: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <S.Title>정보 입력</S.Title>
      <S.InputContainer>
        <div>
          <S.Description>이메일</S.Description>
          <Input placeholder="이메일을 입력해주세요..." />
        </div>
        <div>
          <S.Description>비밀번호</S.Description>
          <Input placeholder="비밀번호를 입력해주세요..." type="password" />
        </div>
        <div>
          <S.Description>비밀번호 확인</S.Description>
          <Input placeholder="비밀번호를 입력해주세요..." type="password" />
        </div>
      </S.InputContainer>
      <S.BottomContainer>
        <S.ToLogin>
          <Link href="/login">로그인으로</Link>
        </S.ToLogin>
        <S.ButtonContainer>
          <S.Page>1 / 3</S.Page>
          <Button onClick={() => router.push("email")}>다음</Button>
        </S.ButtonContainer>
      </S.BottomContainer>
    </div>
  );
};

export default memo(EnterInfoContainer);

import { NextPage } from "next";
import Link from "next/link";
import { memo } from "react";
import Button from "../../../components/Buttons/Button";
import Input from "../../../components/Input";
import * as S from "../styles";

const ProfileContainer: NextPage = () => {
  return (
    <div>
      <S.Title>프로필 정보 입력</S.Title>
      <S.InputContainer>
        <div>
          <S.Description>닉네임</S.Description>
          <Input placeholder="닉네임을 입력해주세요..." />
        </div>
        <div>
          <S.Description>한줄소개</S.Description>
          <Input placeholder="한줄소개를 입력해주세요..." type="password" />
        </div>
        <div>
          <S.Description>프로필 사진</S.Description>
          <S.ImageButton>사진 업로드</S.ImageButton>
        </div>
      </S.InputContainer>
      <S.BottomContainer>
        <S.ToLogin>
          <Link href="/login">로그인으로</Link>
        </S.ToLogin>
        <S.ButtonContainer>
          <S.Page>3 / 3</S.Page>
          <S.ToLogin>
            <Link href="/login/signup/email">이전</Link>
          </S.ToLogin>
          <Button>회원가입</Button>
        </S.ButtonContainer>
      </S.BottomContainer>
    </div>
  );
};

export default memo(ProfileContainer);

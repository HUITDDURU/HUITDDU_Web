import { NextPage } from "next";
import BorderButton from "../../components/Buttons/BorderButton";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input";
import * as S from "./styles";

const LoginContainer: NextPage = () => {
  return (
    <div>
      <S.Title>로그인</S.Title>
      <S.InputContainer>
        <div>
          <S.Description>이메일</S.Description>
          <Input placeholder="이메일을 입력해주세요..." />
        </div>
        <div>
          <S.Description>비밀번호</S.Description>
          <Input placeholder="비밀번호를 입력해주세요..." />
        </div>
      </S.InputContainer>
      <S.ButtonContainer>
          <BorderButton>회원가입</BorderButton>
          <Button>로그인</Button>
      </S.ButtonContainer>
    </div>
  );
};

export default LoginContainer;

import { NextPage } from "next";
import * as S from "./styles";
import LogoImage from "../../assets/images/login-logo.png";
import Image from "next/image";

const LoginContainer: NextPage = () => {
  return (
    <S.Container>
      <S.LoginContainer>
        <S.LogoContainer>
          <Image
            height="120px"
            width="342px"
            objectFit="contain"
            src={LogoImage}
            alt="logo"
          />
        </S.LogoContainer>
      </S.LoginContainer>
    </S.Container>
  );
};

export default LoginContainer;

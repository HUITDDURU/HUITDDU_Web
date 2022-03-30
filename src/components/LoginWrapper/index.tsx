import * as S from "./styles";
import LogoImage from "../../assets/images/login-logo.png";
import Image from "next/image";
import { FC } from "react";

const LoginContainer: FC = ({ children }) => {
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
        {children}
      </S.LoginContainer>
    </S.Container>
  );
};

export default LoginContainer;

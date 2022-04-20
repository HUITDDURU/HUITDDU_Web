import * as S from "./styles";
import Logo from "../../assets/images/header-logo.svg";
import Image from "next/image";
import Link from "next/link";
import BorderButton from "../Buttons/BorderButton";

const Header = () => {
  return (
    <S.Container>
      <S.Inner>
        <Link href="/" passHref>
          <a>
            <Image src={Logo} alt="header logo" height="26px" />
          </a>
        </Link>
        <S.RightOuter>
          <S.RightContainer>
            <Link href="/exchange" passHref>
              <S.Nav>일기 교환</S.Nav>
            </Link>
            <Link href="/exchange" passHref>
              <S.Nav>마이 페이지</S.Nav>
            </Link>
          </S.RightContainer>
          <BorderButton>로그아웃</BorderButton>
        </S.RightOuter>
      </S.Inner>
    </S.Container>
  );
};

export default Header;

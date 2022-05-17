import * as S from "./styles";
import Logo from "../../assets/images/header-logo.svg";
import Image from "next/image";
import Link from "next/link";
import BorderButton from "../Buttons/BorderButton";
import { memo } from "react";
import storageKeys from "../../constant/storageKeys";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const onLogout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      await router.push("/login");

      localStorage.removeItem(storageKeys.accessToken);
      localStorage.removeItem(storageKeys.refreshToken);
      localStorage.removeItem(storageKeys.expiresAt);
    }
  };

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
            <Link href="/my" passHref>
              <S.Nav>마이 페이지</S.Nav>
            </Link>
          </S.RightContainer>
          <BorderButton onClick={onLogout}>로그아웃</BorderButton>
        </S.RightOuter>
      </S.Inner>
    </S.Container>
  );
};

export default memo(Header);

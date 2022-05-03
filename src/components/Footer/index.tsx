import { memo } from "react";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Container>
      <S.Inner>
        <span>
          <S.Nav href="https://github.com/HUITDDURU" rel="noopener noreferrer">
            Github
          </S.Nav>
        </span>
        <span>
          <S.Nav href="https://github.com/HUITDDURU">이용약관</S.Nav>
        </span>
        <S.EmptyCar>
          <S.Nav
            href="https://moonlight-roan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Empty Car 체험하기
          </S.Nav>
        </S.EmptyCar>
        <S.Name>
          2022 Team 휘뚜루마뚜루 | Copyright ⓒ 휘뚜루마뚜루 Corp. All Rights
          Reserved.
        </S.Name>
      </S.Inner>
    </S.Container>
  );
};

export default memo(Footer);

import * as S from "./styles";

const Footer = () => {
  return (
    <S.Container>
      <S.Inner>
        <span>
          <S.Nav href="https://github.com/HUITDDURU" rel="noopener noreferrer">
            <S.Nav>Github</S.Nav>
          </S.Nav>
        </span>
        <span>
          <S.Nav href="https://github.com/HUITDDURU">
            <S.Nav>이용약관</S.Nav>
          </S.Nav>
        </span>
        <S.EmptyCar>
          <S.Nav
            href="https://moonlight-roan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Nav>Empty Car 체험하기</S.Nav>
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

export default Footer;

import * as S from "./styles";
import Editor from "../Editor";

const DiaryPage = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>재판의 전심절차로서 행정심판을 할 수 있다.</S.Title>
        <S.UseContainer>
          <S.UserProfile />
          <S.UserName>rlawlsrms04</S.UserName>
        </S.UseContainer>
      </S.TitleContainer>
      <S.Gray>날짜 : 2022년 1월 1일</S.Gray>
      <S.Margin16 />
      <S.Gray>기분 : 😀</S.Gray>
      <S.Margin40 />
      <S.Image />
      <S.Margin40 />
      <S.Gray>내용</S.Gray>
      <Editor readOnly />
    </S.Container>
  );
};

export default DiaryPage;

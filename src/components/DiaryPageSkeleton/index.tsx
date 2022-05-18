import * as S from "./styles";

const DiaryPageSkeleton = () => {
  const getRandomWidth = () => Math.random() * 50 + 20;

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>재판의 전심절차로서 행정심판을 할 수 있다.</S.Title>
        <S.UseContainer>
          <S.UserProfile />
          <S.UserName>rlawlsrms04</S.UserName>
        </S.UseContainer>
      </S.TitleContainer>
      <span>
        <S.Gray>날짜 : 2022년 1월 1일</S.Gray>
      </span>
      <S.Margin16 />
      <S.Gray>기분 : 😀</S.Gray>
      <S.Margin40 />
      <S.Image />
      <S.Margin40 />
      <S.Gray>내용</S.Gray>
      <S.RowContainer>
        {new Array(Math.floor(Math.random() * 5 + 2))
          .fill(0)
          .map((_, index) => (
            <S.Gray style={{ width: `${getRandomWidth()}%` }} key={index}>
              내용
            </S.Gray>
          ))}
      </S.RowContainer>
    </S.Container>
  );
};

export default DiaryPageSkeleton;

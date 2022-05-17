import * as S from "./styles";

const DiaryCardSkeleton = () => {
  return (
    <S.Container>
      <S.ProfileContainer>
        <S.ProfileOuter>
          <S.Profile />
        </S.ProfileOuter>
        <S.ProfileOuter>
          <S.Profile />
        </S.ProfileOuter>
      </S.ProfileContainer>
      <S.Title>user1234와의 일기장</S.Title>
      <S.InfoContainer>
        <S.Gray> 내 차례</S.Gray>
        <S.Gray>2시간 전</S.Gray>
      </S.InfoContainer>
    </S.Container>
  );
};

export default DiaryCardSkeleton;

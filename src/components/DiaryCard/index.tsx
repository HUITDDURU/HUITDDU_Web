import { useTheme } from "@emotion/react";
import * as S from "./styles";

const DiaryCard = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.ProfileContainer>
        <S.ProfileOuter>
          <S.Profile />
        </S.ProfileOuter>
        <S.ProfileOuter>
          <S.Profile style={{ backgroundColor: theme.colors.secondary }} />
        </S.ProfileOuter>
      </S.ProfileContainer>
      <S.Title>user1234와의 일기장</S.Title>
      <S.InfoContainer>
        <S.Gray>내 차례</S.Gray>
        <S.Gray>1시간 전</S.Gray>
      </S.InfoContainer>
    </S.Container>
  );
};

export default DiaryCard;

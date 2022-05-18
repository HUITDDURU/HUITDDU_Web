import * as S from "./styles";

const StatusSkeleton = () => {
  return (
    <S.Container>
      <S.ProfileOuter>
        <S.ProfileContainer>
          <S.Profile />
        </S.ProfileContainer>
        <S.ProfileContainer>
          <S.Profile />
        </S.ProfileContainer>
      </S.ProfileOuter>
      <S.Content>
        <div>
          <span>
            <b>당신</b>과&nbsp;<b>user1234</b>님이
          </span>
        </div>
        <div>
          <span>일기를 교환하고 있습니다.</span>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default StatusSkeleton;

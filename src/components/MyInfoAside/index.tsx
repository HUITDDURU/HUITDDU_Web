import * as S from "./styles";

const MyInfoAside = () => {
  return (
    <S.Container>
      <S.Profile />
      <S.Name>김진근</S.Name>
      <S.Description>한줄 소개</S.Description>
      <S.OneLine>
        국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등
        필요한 계획을 수립·시행하여야 한다. 학교교육 및 평생교육을 포함한
        교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은
        법률로 정한다.
      </S.OneLine>
    </S.Container>
  );
};

export default MyInfoAside;

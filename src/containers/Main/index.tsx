import DiaryHint from "../../components/DiaryHint";
import DiaryMap from "../../components/DiaryMap";
import Status from "../../components/Status";
import * as S from "./styles";

const MainContainer = () => {
  return (
    <S.Container>
      <S.Title>진행중인 일기</S.Title>
      <S.ContentContainer>
        <DiaryMap />
        <Status />
        <DiaryHint />
      </S.ContentContainer>
    </S.Container>
  );
};

export default MainContainer;

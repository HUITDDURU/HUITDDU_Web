import MyDiaryList from "../../components/MyDiaryList";
import MyInfoAside from "../../components/MyInfoAside";
import * as S from "./styles";

const MyDiaryContainer = () => {
  return (
    <S.Outer>
      <S.Container>
        <S.AsideContainer>
          <MyInfoAside />
        </S.AsideContainer>
        <MyDiaryList />
      </S.Container>
    </S.Outer>
  );
};

export default MyDiaryContainer;

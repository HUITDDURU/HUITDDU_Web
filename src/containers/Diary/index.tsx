import DiaryPage from "../../components/DiaryPage";
import * as S from "./styles";

const DirayContainer = () => {
  return (
    <S.Container>
      <S.Title>user1234와의 일기장</S.Title>
      <S.Add>+ 일기 쓰기</S.Add>
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <DiaryPage key={index} />
        ))}
    </S.Container>
  );
};

export default DirayContainer;

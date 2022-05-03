import DiaryCard from "../DiaryCard";
import * as S from "./styles";

const MyDiaryList = () => {
  return (
    <S.Container>
      <S.Title>일기장</S.Title>
      <S.Grid>
        {new Array(10).fill(0).map((_, index) => (
          <DiaryCard key={index} />
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default MyDiaryList;

import ANIMATED_CLASS from "../../constant/animatedClass";
import { useMyDiaryList } from "../../queries/My";
import DiaryCard from "../DiaryCard";
import DiaryCardSkeleton from "../DiaryCardSkeleton";
import * as S from "./styles";

const MyDiaryList = () => {
  const { data, isLoading, isError, isSuccess } = useMyDiaryList();

  return (
    <S.Container className={ANIMATED_CLASS}>
      <S.Title>일기장</S.Title>
      {isError && <S.Message>오류 발생</S.Message>}
      {isSuccess && data.data.length <= 0 && (
        <S.Message>일기장이 없습니다.</S.Message>
      )}
      <S.Grid>
        {isLoading &&
          new Array(4)
            .fill(0)
            .map((_, index) => <DiaryCardSkeleton key={index} />)}
        {data?.data.map((value) => (
          <DiaryCard {...value} key={value.diaryId} />
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default MyDiaryList;

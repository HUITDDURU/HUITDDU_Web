import ANIMATED_CLASS from "../../constant/animatedClass";
import { useMyDiaryList } from "../../queries/My";
import DiaryCard from "../DiaryCard";
import DiaryCardSkeleton from "../DiaryCardSkeleton";
import * as S from "./styles";

const MyDiaryList = () => {
  const { data, isLoading } = useMyDiaryList();

  return (
    <S.Container className={ANIMATED_CLASS}>
      <S.Title>일기장</S.Title>
      <S.Grid>
        <DiaryCard
          currentUserImg="https://huitdduru.s3.ap-northeast-2.amazonaws.com/3a2aaf9c-3e70-49ae-9814-fdf9dec039ce"
          mateImg="https://huitdduru.s3.ap-northeast-2.amazonaws.com/3a2aaf9c-3e70-49ae-9814-fdf9dec039ce"
          diaryId={123}
          hoursAgo={2}
          isMyTurn
          mateName="rlawlsrms"
        />
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

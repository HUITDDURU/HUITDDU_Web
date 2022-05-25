import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { getDiaryProgress, getMatchedUser } from "../../api/Main";
import DiaryHint from "../../components/DiaryHint";
import DiaryMap from "../../components/DiaryMap";
import Status from "../../components/Status";
import ANIMATED_CLASS from "../../constant/animatedClass";
import queryKeys from "../../constant/queryKeys";
import { useMatchedUser } from "../../queries/Main";
import * as S from "./styles";

const MainContainer = () => {
  const query = useMatchedUser();

  return (
    <S.Container>
      <S.Title className={ANIMATED_CLASS}> 진행중인 일기</S.Title>
      <S.ContentContainer>
        <S.Right>
          <div className={ANIMATED_CLASS}>
            <Status data={query} />
          </div>
          <DiaryHint data={query} />
        </S.Right>
        <DiaryMap />
      </S.ContentContainer>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.matchedUser], getMatchedUser);
  await queryClient.prefetchQuery([queryKeys.diaryProgress], getDiaryProgress);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MainContainer;

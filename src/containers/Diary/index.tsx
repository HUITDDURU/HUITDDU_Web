import axios from "axios";
import { GetServerSideProps } from "next";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import { FC, useEffect } from "react";
import { dehydrate, QueryClient } from "react-query";
import { getDiaryList } from "../../api/Diary";
import DiaryPage from "../../components/DiaryPage";
import DiaryPageSkeleton from "../../components/DiaryPageSkeleton";
import queryKeys from "../../constant/queryKeys";
import useRouterWithPageTransition from "../../hooks/useRouterWithPageTransition";
import { useDiaryList } from "../../queries/Diary";
import * as S from "./styles";

const DirayContainer: FC<WithRouterProps> = ({ router }) => {
  const push = useRouterWithPageTransition();
  const queryKey = "id";
  const id =
    router.query[queryKey] ||
    router.asPath.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`));
  const { data, isLoading, isError, error, isSuccess } = useDiaryList(
    id ? Number(id) : null
  );

  useEffect(() => {
    if (
      !(id && typeof id === "string" && !isNaN(Number(id))) &&
      router.isReady
    ) {
      push("/404", 500);
    }
  }, [id, push, router.isReady]);

  useEffect(() => {
    if (
      isError &&
      axios.isAxiosError(error) &&
      error.response?.status === 404
    ) {
      router.push("/404");
    }
  }, [error, isError, router]);

  return (
    <S.Container>
      {isLoading && <S.Title>로딩중...</S.Title>}
      {isError && <S.Title>오류 발생</S.Title>}
      {isSuccess && <S.Title>user1234와의 일기장</S.Title>}
      <S.Pages>
        <S.Add>+ 일기 쓰기</S.Add>
        {isLoading &&
          new Array(2)
            .fill(0)
            .map((_, index) => <DiaryPageSkeleton key={index} />)}
        {data?.data.map((_, index) => (
          <DiaryPage key={index} />
        ))}
        {isSuccess && data.data.length <= 0 && (
          <S.Message>
            주고받은 일기가 없습니다. 지금 교환을 시작해보세요.
          </S.Message>
        )}
      </S.Pages>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const query = context.query.id;

  if (typeof query === "string" && !isNaN(Number(query))) {
    await queryClient.prefetchQuery([queryKeys.diaryList, query], () =>
      getDiaryList(Number(query))
    );
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default withRouter(DirayContainer);

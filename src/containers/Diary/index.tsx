import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { DiaryWriteSSRProps } from "../../../pages/diary/[id]";
import DiaryPage from "../../components/DiaryPage";
import DiaryPageSkeleton from "../../components/DiaryPageSkeleton";
import { useDiaryList } from "../../queries/Diary";
import * as S from "./styles";

const DirayContainer: FC<DiaryWriteSSRProps> = ({ id }) => {
  const { data, isLoading, isError, error, isSuccess } = useDiaryList(
    Number(id)
  );
  const router = useRouter();

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
    <>
      <Head>
        <title>{data?.matchedUserName}와의 일기장 - 휘뚜루마뚜루</title>
      </Head>
      <S.Container>
        {isLoading && <S.Title>로딩중...</S.Title>}
        {isError && <S.Title>오류 발생</S.Title>}
        {isSuccess && <S.Title>{data.matchedUserName}와의 일기장</S.Title>}
        <S.Pages>
          <Link href={`/diary/${id}/write`} passHref>
            <S.Add>+ 일기 쓰기</S.Add>
          </Link>
          {isLoading &&
            new Array(2)
              .fill(0)
              .map((_, index) => <DiaryPageSkeleton key={index} />)}
          {data?.list.map((value, index) => (
            <DiaryPage {...value} key={index} />
          ))}
          {isSuccess && data.list.length <= 0 && (
            <S.Message>
              주고받은 일기가 없습니다. 지금 교환을 시작해보세요.
            </S.Message>
          )}
        </S.Pages>
      </S.Container>
    </>
  );
};

export default DirayContainer;

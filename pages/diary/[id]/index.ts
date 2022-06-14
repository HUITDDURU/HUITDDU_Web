import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { dehydrate, QueryClient } from "react-query";
import { getDiaryList } from "../../../src/api/Diary";
import queryKeys from "../../../src/constant/queryKeys";
import storageKeys from "../../../src/constant/storageKeys";
import { request } from "../../../src/utils/axios";

export interface DiaryWriteSSRProps {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  DiaryWriteSSRProps
> = async (ctx) => {
  const { params } = ctx;
  const allCookies = cookies(ctx);
  const accessToken = allCookies[storageKeys.accessToken];
  request.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  const queryClient = new QueryClient();
  const query = ctx.query.id;

  if (typeof query === "string" && !isNaN(Number(query))) {
    await queryClient.prefetchQuery([queryKeys.diaryList, Number(query)], () =>
      getDiaryList(Number(query))
    );
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: params?.id as string,
    },
  };
};

export { DiaryContainer as default } from "../../../src/containers";

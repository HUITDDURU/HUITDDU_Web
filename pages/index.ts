import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { dehydrate, QueryClient } from "react-query";
import { getDiaryProgress, getMatchedUser } from "../src/api/Main";
import queryKeys from "../src/constant/queryKeys";
import storageKeys from "../src/constant/storageKeys";
import { request } from "../src/utils/axios";

export { MainContainer as default } from "../src/containers";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const accessToken = allCookies[storageKeys.accessToken];
  request.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.matchedUser], getMatchedUser);
  await queryClient.prefetchQuery([queryKeys.diaryProgress], getDiaryProgress);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

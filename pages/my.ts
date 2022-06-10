import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { dehydrate, QueryClient } from "react-query";
import { getMyDiaryList, getProfile } from "../src/api/My";
import queryKeys from "../src/constant/queryKeys";
import storageKeys from "../src/constant/storageKeys";
import { request } from "../src/utils/axios";

export { MyDiaryContainer as default } from "../src/containers";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const accessToken = allCookies[storageKeys.accessToken];
  request.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.my], getProfile);
  await queryClient.prefetchQuery([queryKeys.myDiaryList], getMyDiaryList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

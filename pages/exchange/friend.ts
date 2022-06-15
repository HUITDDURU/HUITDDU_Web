import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { dehydrate, QueryClient } from "react-query";
import { getMatchedUser } from "../../src/api/Main";
import { getCode } from "../../src/api/My";
import queryKeys from "../../src/constant/queryKeys";
import storageKeys from "../../src/constant/storageKeys";
import { request } from "../../src/utils/axios";

export { FriendContainer as default } from "../../src/containers";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const accessToken = allCookies[storageKeys.accessToken];
  request.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  const queryClient = new QueryClient();

  try {
    await getMatchedUser();

    return { redirect: { destination: "/" }, props: {} };
  } catch (error) {}

  await queryClient.prefetchQuery([queryKeys.code], getCode);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

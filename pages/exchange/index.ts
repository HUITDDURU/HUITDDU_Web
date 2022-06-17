import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { getMatchedUser } from "../../src/api/Main";
import storageKeys from "../../src/constant/storageKeys";
import { request } from "../../src/utils/axios";

export { ExchangeContainer as default } from "../../src/containers";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const accessToken = allCookies[storageKeys.accessToken];
  request.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  try {
    await getMatchedUser();

    return { redirect: { destination: "/" }, props: {} };
  } catch (error) {}

  return {
    props: {},
  };
};

import { useQuery } from "react-query";
import { getMatchedUser } from "../api/Main";
import queryKeys from "../constant/queryKeys";

const useMatchedUser = () =>
  useQuery([queryKeys.matchedUser], () => getMatchedUser(), {
    refetchOnWindowFocus: false,
  });

export { useMatchedUser };

import { useQuery } from "react-query";
import { getDiaryProgress, getMatchedUser } from "../api/Main";
import queryKeys from "../constant/queryKeys";

const useMatchedUser = () =>
  useQuery([queryKeys.matchedUser], () => getMatchedUser(), {
    refetchOnWindowFocus: false,
  });

const useDiaryProgress = () =>
  useQuery([queryKeys.diaryProgress], () => getDiaryProgress());

export { useMatchedUser, useDiaryProgress };

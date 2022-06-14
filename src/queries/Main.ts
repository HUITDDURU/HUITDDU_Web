import { useMutation, useQuery } from "react-query";
import { exitMatching, getDiaryProgress, getMatchedUser } from "../api/Main";
import queryKeys from "../constant/queryKeys";

const useMatchedUser = () =>
  useQuery([queryKeys.matchedUser], () => getMatchedUser(), {
    refetchOnWindowFocus: false,
  });

const useDiaryProgress = () =>
  useQuery([queryKeys.diaryProgress], () => getDiaryProgress());

const useMatchingMutation = () => useMutation(exitMatching);

export { useMatchedUser, useDiaryProgress, useMatchingMutation };

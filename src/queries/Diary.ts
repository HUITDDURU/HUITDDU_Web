import { useMutation, useQuery } from "react-query";
import { getDiaryList, postDiary } from "../api/Diary";
import { PostDiaryRequest } from "../api/Diary/interface";
import queryKeys from "../constant/queryKeys";

const useDiaryList = (diaryId: number) =>
  useQuery([queryKeys.diaryList, diaryId], () => getDiaryList(diaryId));

const useDiaryMutation = (diaryId: number) =>
  useMutation((data: PostDiaryRequest) => postDiary(diaryId, data));

export { useDiaryList, useDiaryMutation };

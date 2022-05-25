import uri from "../../constant/uri";
import { request } from "../../utils/axios";
import { GetDiaryListResponse, PostDiaryRequest } from "./interface";

const getDiaryList = async (diaryId: number) => {
  return await request.get<GetDiaryListResponse>(
    `${uri.diary}/${diaryId}${uri.list}`
  );
};

const postDiary = async (diaryId: number, data: PostDiaryRequest) => {
  return await request.post(`${uri.diary}/${diaryId}`, { ...data });
};

export { getDiaryList, postDiary };

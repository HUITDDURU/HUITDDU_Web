import uri from "../../constant/uri";
import { request } from "../../utils/axios";
import { GetDiaryProgressResponse, GetMatchedUserResponse } from "./interface";

const getMatchedUser = async () => {
  return await request.get<GetMatchedUserResponse>(uri.match);
};

const getDiaryProgress = async () => {
  return await request.get<GetDiaryProgressResponse>(uri.chronology);
};

export { getMatchedUser, getDiaryProgress };

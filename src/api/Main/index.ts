import uri from "../../constant/uri";
import { request } from "../../utils/axios";
import { GetDiaryProgressResponse, GetMatchedUserResponse } from "./interface";

const getMatchedUser = async () => {
  return (await request.get<GetMatchedUserResponse>(uri.match)).data;
};

const getDiaryProgress = async () => {
  return (await request.get<GetDiaryProgressResponse>(uri.chronology)).data;
};

export { getMatchedUser, getDiaryProgress };

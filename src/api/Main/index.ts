import uri from "../../constant/uri";
import { request } from "../../utils/axios";
import { GetMatchedUserResponse } from "./interface";

const getMatchedUser = async () => {
  return await request.get<GetMatchedUserResponse>(uri.match);
};

export { getMatchedUser };

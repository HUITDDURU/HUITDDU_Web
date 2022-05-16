import uri from "../../constant/uri";
import { request } from "../../utils/axios";
import { GetProfileResponse } from "./interface";

const getProfile = async () => {
  return await request.get<GetProfileResponse>(uri.my);
};

export { getProfile };

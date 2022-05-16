import uri from "../../constant/uri";
import { request } from "../../utils/axios";

const getProfile = async () => {
  return await request.get(uri.my);
};

export { getProfile };

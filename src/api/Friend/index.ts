import uri from "../../constant/uri";
import { request } from "../../utils/axios";

const matchingFriend = async (code: string) =>
  await request.post(uri.mate, { code });

export { matchingFriend };

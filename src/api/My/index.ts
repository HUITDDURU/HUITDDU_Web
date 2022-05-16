import uri from "../../constant/uri";
import { request } from "../../utils/axios";
import { GetProfileResponse } from "./interface";

const getProfile = async () => {
  return await request.get<GetProfileResponse>(uri.my);
};

const changeProfileImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  return await request.patch(uri.profileImage, formData);
};

const changeIntro = async (intro: string) => {
  return await request.patch(uri.intro, { intro });
};

export { getProfile, changeProfileImage, changeIntro };

import uri from "../../constant/uri";
import { request } from "../../utils/axios";
import { GetMyDiaryListResponse, GetProfileResponse } from "./interface";

const getProfile = async () => {
  return (await request.get<GetProfileResponse>(uri.my)).data;
};

const changeProfileImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  return await request.patch(uri.profileImage, formData);
};

const changeIntro = async (intro: string) => {
  return await request.patch(uri.intro, { intro });
};

const getMyDiaryList = async () => {
  return (await request.get<GetMyDiaryListResponse>(uri.myDiaryList)).data;
};

export { getProfile, changeProfileImage, changeIntro, getMyDiaryList };

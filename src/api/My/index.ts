import uri from "../../constant/uri";
import { request } from "../../utils/axios";
import {
  GetCodeResponse,
  GetMyDiaryListResponse,
  GetProfileResponse,
} from "./interface";

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

const getCode = async () => {
  return (await request.get<GetCodeResponse>(uri.code)).data;
};

export { getProfile, changeProfileImage, changeIntro, getMyDiaryList, getCode };

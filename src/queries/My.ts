import { useMutation, useQuery } from "react-query";
import {
  changeIntro,
  changeProfileImage,
  getCode,
  getMyDiaryList,
  getProfile,
} from "../api/My";
import queryKeys from "../constant/queryKeys";

const useProfile = () => useQuery([queryKeys.my], () => getProfile());

const useMyDiaryList = () =>
  useQuery([queryKeys.myDiaryList], () => getMyDiaryList());

const useProfileMutation = () => {
  const profileImageMutation = useMutation((file: File) =>
    changeProfileImage(file)
  );

  const introMutation = useMutation((intro: string) => changeIntro(intro));

  return { profileImageMutation, introMutation };
};

const useCode = () => useQuery([queryKeys.code], getCode);

export { useProfile, useProfileMutation, useMyDiaryList, useCode };

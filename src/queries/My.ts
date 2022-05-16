import { useMutation, useQuery } from "react-query";
import { changeIntro, changeProfileImage, getProfile } from "../api/My";
import queryKeys from "../constant/queryKeys";

const useProfile = () => useQuery([queryKeys.my], () => getProfile());

const useProfileMutation = () => {
  const profileImageMutation = useMutation((file: File) =>
    changeProfileImage(file)
  );

  const introMutation = useMutation((intro: string) => changeIntro(intro));

  return { profileImageMutation, introMutation };
};

export { useProfile, useProfileMutation };

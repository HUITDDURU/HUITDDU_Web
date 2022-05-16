import { useMutation, useQuery } from "react-query";
import { changeProfileImage, getProfile } from "../api/My";
import queryKeys from "../constant/queryKeys";

const useProfile = () => useQuery([queryKeys.my], () => getProfile());

const useProfileMutation = () => {
  const profileImageMutation = useMutation((file: File) =>
    changeProfileImage(file)
  );

  return { profileImageMutation };
};

export { useProfile, useProfileMutation };

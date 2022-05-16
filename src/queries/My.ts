import { useQuery } from "react-query";
import { getProfile } from "../api/My";
import queryKeys from "../constant/queryKeys";

const useProfile = () => useQuery([queryKeys.my], () => getProfile());

export { useProfile };

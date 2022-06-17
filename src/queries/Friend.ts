import { useMutation } from "react-query";
import { matchingFriend } from "../api/Friend";

const useFriendMatchingMutation = () => useMutation(matchingFriend);

export { useFriendMatchingMutation };

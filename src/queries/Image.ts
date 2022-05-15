import { useMutation } from "react-query";
import { uploadImage } from "../api/Image";

const useImageMutation = () => {
  return useMutation((file: File) => uploadImage(file));
};

export { useImageMutation };

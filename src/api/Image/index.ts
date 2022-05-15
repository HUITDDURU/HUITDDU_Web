import uri from "../../constant/uri";
import { requestWithNoToken } from "../../utils/axios";
import { UploadImageResponse } from "./interface";

const uploadImage = async (file: File) => {
  const formdata = new FormData();
  formdata.append("file", file);

  const res = await requestWithNoToken.post<UploadImageResponse>(
    uri.image,
    formdata
  );

  return res;
};

export { uploadImage };

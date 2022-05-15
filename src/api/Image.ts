import uri from "../constant/uri";
import { requestWithNoToken } from "../utils/axios";

const uploadImage = async (file: File) => {
  const formdata = new FormData();
  formdata.append("file", file);

  const res = await requestWithNoToken.post(uri.image, formdata);
  console.log(res);

  return res;
};

export { uploadImage };

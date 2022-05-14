import uri from "../../constant/uri";
import { requestWithNoToken } from "../../utils/axios";
import { TokenResponse } from "./interface";

const reissuanceToken = (refreshToken: string) => {
  return requestWithNoToken.put<TokenResponse>(uri.auth, {
    "refresh-token": refreshToken,
  });
};

const login = (email: string, password: string) => {
  return requestWithNoToken.post<TokenResponse>(uri.auth, {
    email,
    password,
  });
};

const signUp = (
  email: string,
  name: string,
  password: string,
  intro: string,
  imageUrl: string
) => {
  return requestWithNoToken.post(uri.register, {
    email,
    name,
    password,
    intro,
    imageUrl,
  });
};

export { reissuanceToken, login, signUp };
